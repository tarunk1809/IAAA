import React, { useState, useEffect, useRef } from "react";
import "./CommonComponent.css";
import { useNavigate } from "react-router-dom";

// Function to shuffle questions
const shuffleQuestions = (questions) => {
  return questions.sort(() => Math.random() - 0.5);
};

const CommonComponent2 = ({ questions: initialQuestions }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(30);
  const [points, setPoints] = useState(0);
  const [lifelines, setLifelines] = useState({
    fiftyFifty: true,
    phoneFriend: true,
    audiencePoll: true,
  });
  const [gameStatus, setGameStatus] = useState("playing"); // 'playing', 'won', 'lost'
  const timerRef = useRef(null);
  const navigate = useNavigate();

  // Money ladder values from 100,000 to 10,000 in increments of 10,000
  const moneyLadder = [
    100000, 75000, 50000, 25000, 15000, 10000, 5000, 3000, 2000, 1000,
  ];

  useEffect(() => {
    // Shuffle questions when component mounts
    setQuestions(shuffleQuestions(initialQuestions));
  }, [initialQuestions]);

  useEffect(() => {
    // Reset the visibility of all options when the question changes
    const options = document.querySelectorAll(".option-item");
    options.forEach((option) => {
      option.style.display = "block"; // Make sure all options are visible for the new question
    });

    if (gameStatus === "playing") {
      resetTimer();
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentQuestionIndex, gameStatus]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTimer(30);
    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setGameStatus("lost");
          alert("Time's up! Game Over.");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleAnswerClick = (option) => {
    if (gameStatus !== "playing") return;

    const correctAnswer = questions[currentQuestionIndex].correct_answer;
    if (option === correctAnswer) {
      alert("Correct Answer!");
      setPoints((prev) => prev + 1000); // Add 10,000 points for each correct answer
      setCurrentQuestionIndex((prev) => prev + 1);
      if (currentQuestionIndex + 1 >= questions.length) {
        setGameStatus("won");
        alert("Congratulations! You've completed the quiz.");
      }
    } else {
      alert("Wrong Answer! Game Over.");
      setGameStatus("lost");
    }
  };

  const handleLifeline = (type) => {
    if (!lifelines[type]) return;

    if (type === "fiftyFifty") {
      handleFiftyFifty();
    } else if (type === "phoneFriend") {
      alert(
        `Hint: The correct answer is likely '${questions[currentQuestionIndex].correct_answer}'.`
      );
    } else if (type === "audiencePoll") {
      alert(
        `The majority of the audience votes for option '${questions[currentQuestionIndex].correct_answer}'.`
      );
    }

    setLifelines((prev) => ({ ...prev, [type]: false }));
  };

  const handleFiftyFifty = () => {
    const options = document.querySelectorAll(".option-item");
    let incorrectAnswers = [];
    options.forEach((option) => {
      if (
        option.textContent.includes(
          questions[currentQuestionIndex].correct_answer
        )
      ) {
        option.style.display = "block";
      } else {
        incorrectAnswers.push(option);
      }
    });
    incorrectAnswers.sort(() => Math.random() - 0.5);
    incorrectAnswers
      .slice(0, 2)
      .forEach((option) => (option.style.display = "none"));
    document.getElementById("fiftyFifty").disabled = true;
  };

  const handleBack = () => {
    clearInterval(timerRef.current);
    navigate(-1);
  };

  const question = questions[currentQuestionIndex];

  return (
    <div className="common-container">
      <div className="game-section">
        <div className="top-status-bar">
          <div className="points-display">Points: {points}</div>
          <div className="timer-display">{timer}s</div>
        </div>
        <h1 className="game-title">General Knowledge Quiz</h1>
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
        <div className="lifelines-container">
          <button
            className="lifeline-button"
            id="fiftyFifty"
            onClick={() => handleLifeline("fiftyFifty")}
            disabled={!lifelines.fiftyFifty}
          >
            50-50
          </button>
          <button
            className="lifeline-button"
            id="phoneFriend"
            onClick={() => handleLifeline("phoneFriend")}
            disabled={!lifelines.phoneFriend}
          >
            Phone a Friend
          </button>
          <button
            className="lifeline-button"
            id="audiencePoll"
            onClick={() => handleLifeline("audiencePoll")}
            disabled={!lifelines.audiencePoll}
          >
            Audience Poll
          </button>
        </div>
        <div className="question-container">
          {question ? question.question : "Loading..."}
        </div>
        <div className="options-container">
          {question &&
            question.options.map((option, index) => (
              <div
                key={index}
                className="option-item"
                onClick={() => handleAnswerClick(option)}
              >
                <span className="option-label">
                  {String.fromCharCode(65 + index)}
                </span>{" "}
                {option}
              </div>
            ))}
        </div>
      </div>
      <div className="money-ladder">
        <ul className="money-ladder-list">
          {moneyLadder.map((amount, index) => (
            <li
              key={index}
              className={
                index === 9 - currentQuestionIndex
                  ? "current-ladder-item"
                  : "ladder-item"
              }
            >
              {formatNumber(amount)} Points
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const formatNumber = (num) => {
  return num.toLocaleString();
};

export default CommonComponent2;
