import React, { useEffect, useState } from "react";
import axios from "axios";
import CommonComponent2 from "../CommonComponent2";

const Quiz = () => {
  const [categories, setCategories] = useState([]);
  const [levelView, setLevelView] = useState(true);

  const [levelVal, setLevelVal] = useState();



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
    alert("hello");
    axios
      .get(
        `http://localhost:5000/api/questions?level=${quitz.level}&category=${quitz.category}`
      )
      .then((res) => {
        setResult(res?.data);
      });
  };

  const IsModelOpenHandler = (level) => {
    setLevelVal(level)
    setLevelView((prev) => !prev);
  };

  const SelectCategoryHandler = (categoryId)=>{
    axios
      .get(
        `http://localhost:5000/api/questions?level=${levelVal}&category=${categoryId}`
      )
      .then((res) => {
        setResult(res?.data);
      });
  }



  return (
    <>
      {levelView ? (
        <>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <div>
                  <div className="card" style={{ width: "18rem" }}>
                    {/* <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtQyXGKqaawhTEsftomCBIXtIk16zx7djAA&s"
                      alt="Space Related Data"
                    /> */}
                    <div className="card-body">
                      <button
                        className="btn btn-primary"
                        data-bs-target="#exampleModalToggle"
                        onClick={()=>IsModelOpenHandler('easy')}
                      >
                        Easy
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div>
                  <div className="card" style={{ width: "18rem" }}>
                    {/* <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtQyXGKqaawhTEsftomCBIXtIk16zx7djAA&s"
                      alt="Space Related Data"
                    /> */}
                    <div className="card-body">
                      <button
                        className="btn btn-primary"
                        data-bs-target="#exampleModalToggle"
                        onClick={()=>IsModelOpenHandler("medium")}
                      >
                        Medium
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div>
                  <div className="card" style={{ width: "18rem" }}>
                    {/* <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtQyXGKqaawhTEsftomCBIXtIk16zx7djAA&s"
                      alt="Space Related Data"
                    /> */}
                    <div className="card-body">
                      <button
                        className="btn btn-primary"
                        data-bs-target="#exampleModalToggle"
                        onClick={()=>IsModelOpenHandler("hard")}
                      >
                        Hard
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {results.length === 0 ? (
            <>
            {!levelView &&
              <div className="container text-center">
                <div className="row">
                  {categories.map((category) => {
                    return (
                      <div className="col">
                        <div>
 
                         

                          <div className="card" style={{ width: "18rem" }}>
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtQyXGKqaawhTEsftomCBIXtIk16zx7djAA&s"
                              alt="Space Related Data"
                            />
                            <div className="card-body">
                              <button
                                className="btn btn-primary"
                                data-bs-target="#exampleModalToggle"
                                onClick={()=>SelectCategoryHandler(category?.id)}
                              >
                                {category.name}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
}
            </>
          ) : (
            <CommonComponent2 questions={results} back={() => setResult([])} />
          )}
        </>
      )}
    </>
  );
};

export default Quiz;
