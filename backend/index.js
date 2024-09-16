const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(corsOptions));

// Use environment port or default to 5000
const port = process.env.PORT || 5000;

// Create a new Pool instance for connecting to the PostgreSQL database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use DATABASE_URL from Quiz
  ssl: {
    rejectUnauthorized: false, // Required for production environments
  },
});

async function createQuestionsTable() {
  const query = `
      CREATE TABLE IF NOT EXISTS Questions (
        id SERIAL PRIMARY KEY,
        question TEXT NOT NULL,
        options TEXT[] NOT NULL,
        correct_answer TEXT NOT NULL,
        level TEXT NOT NULL,
        categoryId TEXT NOT NULL
      );
    `;
  try {
    // await pool.query('drop table if exists Questions');
    await pool.query(query);
    console.log("Table 'Questions' created successfully.");
  } catch (error) {
    console.error("Error creating table:", error);
  }
}

async function createCategoryTable() {
  const query = `
      CREATE TABLE IF NOT EXISTS Categories (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL
      );
    `;
  try {
    await pool.query(query);
    console.log("Table 'Categories' created successfully.");
  } catch (error) {
    console.error("Error creating table:", error);
  }
}

// Call the function to create the table
createCategoryTable();
createQuestionsTable();

// Optional: Close the pool after running the query

app.post("/api/categories", async (req, res) => {
  const { name } = req.body;

  // Check if all fields are provided
  if (!name) {
    return res.status(400).send("name is required.");
  }

  // Insert the new question into the database
  const query = `
      INSERT INTO Categories (name)
      VALUES ($1)
      RETURNING *;
    `;

  try {
    const result = await pool.query(query, [name]);
    const newCategory = result.rows[0]; // Get the inserted Category
    res.status(201).json(newCategory);
  } catch (error) {
    console.error("Error creating Category:", error);
    res.status(500).send("Server error.");
  }
});

app.get("/api/categories", async (req, res) => {
  const query = `
      SELECT * FROM Categories;
    `;
  try {
    const result = await pool.query(query);
    const categories = result.rows;
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).send("Server error.");
  }
});

app.get("/api/questions", async (req, res) => {
  const { level, category } = req.query;

  // Check if both level and category are provided
  if (!level || !category) {
    return res.status(400).send("Both level and category are required.");
  }

  // const query = `
  //   SELECT * FROM Questions
  //   WHERE level = $1 AND categoryId = $2 ORDER BY RANDOM();
  // `;

  try {
    const result = await pool.query(
      ` SELECT * FROM Questions
      WHERE level = $1 AND categoryId = $2 ORDER BY RANDOM(); `,
      [level, category]
    );
    const questions = result.rows;
    res.status(200).json(questions);
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).send("Server error.");
  }
});

app.post("/api/questions", async (req, res) => {
  const { question, options, correct_answer, level, categoryId } = req.body;

  // Check if all fields are provided
  if (!question || !options || !correct_answer || !level || !categoryId) {
    return res
      .status(400)
      .send(
        "All fields (question, options, correct_answer, level, category) are required."
      );
  }

  // Insert the new question into the database
  const query = `
      INSERT INTO questions (question, options, correct_answer, level, categoryId)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

  try {
    const result = await pool.query(query, [
      question,
      options,
      correct_answer,
      level,
      categoryId,
    ]);
    const newQuestion = result.rows[0]; // Get the inserted question
    res.status(201).json(newQuestion);
  } catch (error) {
    console.error("Error creating question:", error);
    res.status(500).send("Server error.");
  }
});

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM Questions");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error executing query", error.stack);
    res.status(500).send("Database query failed");
  }
});

// Get Telugu questions by level and category
app.get("/api/telugu-questions", async (req, res) => {
  const { level, category } = req.query;
  if (!level || !category)
    return res.status(400).send("Level and category are required.");

  try {
    const result = await pool.query(
      "SELECT * FROM TeluguQuestions WHERE level = $1 AND categoryId = $2;",
      [level, category]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching Telugu questions:", error);
    res.status(500).send("Server error.");
  }
});

// Get Hindi questions by level and category
app.get("/api/hindi-questions", async (req, res) => {
  const { level, category } = req.query;
  if (!level || !category)
    return res.status(400).send("Level and category are required.");

  try {
    const result = await pool.query(
      "SELECT * FROM HindiQuestions WHERE level = $1 AND categoryId = $2;",
      [level, category]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching Hindi questions:", error);
    res.status(500).send("Server error.");
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
