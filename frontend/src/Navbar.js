import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <a href="/quiz" className="btn btn-primary">
                  Quiz
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div class="col">
          <div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/addQuestion" className="btn btn-primary">
                  Add Question
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/addCategory" className="btn btn-primary">
                  Add Category
                </a>
              </div>
            </div>
          </div>
        </div> */}



      </div>
    </div>
  );
}

export default Navbar;
