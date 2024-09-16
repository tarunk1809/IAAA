
import React, { useState } from "react";
import { useEffect } from "react";
import './CommonComponent.css';
import {useNavigate} from 'react-router-dom'

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function CommonComponent1(props) {
  console.log(props.questions);
  

    const [questions,setQuestions] = useState(props.questions)
    const navigate = useNavigate()

    let currentQuestion = 0;
    let timer;
    let timeLeft = 30;
    let points = 0;

    useEffect(()=>{
        loadQuestion()
    },[]);


    function loadQuestion() {
        document.getElementById("question").innerText = questions[currentQuestion].question;
        const options = document.querySelectorAll(".option");
        options.forEach((option, index) => {
          let aa = shuffleArray([...questions[currentQuestion].incorrect_answers,questions[currentQuestion].correct_answer])
          console.log(aa);
          
          option.innerText = aa[index];
          // option.style.display = "block";
          option.style.backgroundColor = "";
        });
        resetTimer();
      }
      
      function checkAnswer(answer) {
        if (answer.target.textContent === questions[currentQuestion].correct_answer) {
          alert("Correct Answer!");
          updateMoneyLadder();
          points += 1000 * (currentQuestion + 1);
          updatePointsDisplay();
          currentQuestion++;
          if (currentQuestion < questions.length) {
            loadQuestion();
          } else {
            alert("Congratulations! You've completed the quiz.");
            clearInterval(timer);
          }
        } else {
          alert("Wrong Answer! Game Over.");
          showWrongAnswer(answer);
          clearInterval(timer);
        }
      }
      
      function updatePointsDisplay() {
        document.getElementById("pointsDisplay").innerText = `Points: ${points}`;
      }
      
      function showWrongAnswer(answer) {
        const options = document.querySelectorAll(".option");
        options[answer].style.backgroundColor = "#f8d7da";
        document.getElementById("fiftyFifty").disabled = true;
        document.getElementById("phoneFriend").disabled = true;
        document.getElementById("audiencePoll").disabled = true;
        options.forEach((option,index)=>{
            if(answer!==index){
                option.style.display='none'
            }else{
                option.style.disabled=true 
            }
        })
        const ladderItems = document.querySelectorAll(".money-ladder li");
        ladderItems.forEach((item, index) => { 
          if (index === ladderItems.length - 1 - currentQuestion) {
            item.style.backgroundColor = "#f8d7da";
          }
        });
      }
      
      function updateMoneyLadder() {
        const ladderItems = document.querySelectorAll(".money-ladder li");
        ladderItems[ladderItems.length - 1 - currentQuestion].classList.remove("current");
        if (currentQuestion < ladderItems.length - 1) {
          ladderItems[ladderItems.length - 2 - currentQuestion].classList.add("current");
        }
      }
      
      function resetTimer() {
        clearInterval(timer);
        timeLeft = 30;
        document.getElementById("timer").innerText = `${timeLeft}s`;
        timer = setInterval(() => {
          timeLeft--;
          document.getElementById("timer").innerText = `${timeLeft}s`;
          if (timeLeft <= 0) {
            alert("Time's up! Game Over.");
            clearInterval(timer);
          }
        }, 1000);
      }
      
      function FiftyFiftyHandler() {
        const options = document.querySelectorAll(".option");
        let incorrectAnswers = [];
        options.forEach((option, index) => {
          if (option.textContent !== questions[currentQuestion].correct) {
            incorrectAnswers.push(option);
          }
        });
        incorrectAnswers.sort(() => Math.random() - 0.5);
        incorrectAnswers.slice(0, 2).forEach(option => option.style.display = "none");
        document.getElementById("fiftyFifty").disabled = true;
      }
      
      function PhoneFriendHandler() {
        alert("Phone a Friend used! Hint: The correct answer is likely '" + questions[currentQuestion].correct_answer + "'.");
        document.getElementById("phoneFriend").disabled = true;
      }
      
      function AudiencePollHandler() {
        alert("Audience Poll used! The majority of the audience votes for option '" + questions[currentQuestion].correct_answer + "'.");
        document.getElementById("audiencePoll").disabled = true;
      }

      const backHandlerData = ()=>{
        clearInterval(timer);
        props.back()
      }
      

    return (
        <div className="container">
            <div className="game-content">
                <h1 style={{color:'#fff'}}>General Knowledge Quiz</h1>
                <button className="lifeline-button" onClick={()=>backHandlerData()}>Back</button>
                <div className="lifelines">
                    <button className="lifeline-button" id="fiftyFifty" onClick={()=>FiftyFiftyHandler()}>50-50</button>
                    <button className="lifeline-button" id="phoneFriend" onClick={()=>PhoneFriendHandler()}>Phone a Friend</button>
                    <button className="lifeline-button" id="audiencePoll" onClick={()=>AudiencePollHandler()}>Audience Poll</button>
                </div>
                <div className="question" id="question">Question will appear here</div>
                <div id="options">
                    <div className="option" onClick={checkAnswer}>
                        <span className="option-label">A</span> Option A
                    </div>
                    <div className="option" onClick={checkAnswer}>
                        <span className="option-label">B</span> Option B
                    </div>
                    <div className="option" onClick={checkAnswer}>
                        <span className="option-label">C</span> Option C
                    </div>
                    <div className="option" onClick={checkAnswer}>
                        <span className="option-label">D</span> Option D
                    </div>
                </div>
                <div style={{display:'flex', width:'100%', alignItems:'center', justifyContent:'space-between', padding:'20px 0', borderTop:'1px solid #ccc', margin:'10px 36px'}}>
                
                <div className="points" id="pointsDisplay">Points: 0</div>
                <div className="timer" id="timer">30s</div>
                </div>
            </div>
            <div className="money-ladder" id="moneyLadder">
                <ul>
                    <li> 1,00,00,000</li>
                    <li> 50,00,000</li>
                    <li> 25,00,000</li>
                    <li> 12,50,000</li>
                    <li> 6,40,000</li>
                    <li> 3,20,000</li>
                    <li> 1,60,000</li>
                    <li> 80,000</li>
                    <li> 40,000</li>
                    <li> 20,000</li>
                    <li> 10,000</li>
                    <li> 5,000</li>
                    <li> 3,000</li>
                    <li> 2,000</li>
                    <li className="current"> 1,000</li>
                </ul>
            </div>
        </div>
    )
}
export default CommonComponent1;

