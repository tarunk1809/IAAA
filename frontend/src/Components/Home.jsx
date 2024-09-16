import axios from "axios";
import React, { useEffect, useState } from "react";
import CommonComponent1 from "../CommonComponent1";
import CommonComponent2 from "../CommonComponent2";

const Home = () => {
  const [categories, setCategories] = useState([]);

  const [quitz, setQuitz] = useState({ category: "", level: "" });

  const [results, setResult] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/categories").then((res) => {
      setCategories(res?.data);
    });
  }, []);

  const changeHandler = (e) => {
    setQuitz({ ...quitz, [e.target?.name]: e.target.value });    
  };

  const submit = () => {
    alert('hello');
    axios
      .get(
        `http://localhost:5000/api/questions?level=${quitz.level}&category=${quitz.category}`
      )
      .then((res) => {
        setResult(res?.data);
      });
  };

  return (
    <>
      {results.length === 0 ? (
        <div>
          <h1>Welcome to Quitz</h1>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h3>Select Category :</h3>
            <select onChange={changeHandler} name="category">
              {categories.map((category) => {
                return <option value={category.id}>{category.name}</option>;
              })}
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h3>Select Difficulty :</h3>
            <select className="form-select" name="level" onChange={changeHandler}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <button onClick={submit}>Submit</button>
        </div>
      ) : (
        <CommonComponent2 questions={results} back={()=>setResult([])}/>
      )}
    </>
  );
};

export default Home;
