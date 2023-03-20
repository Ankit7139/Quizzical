import React from "react";
import { useDispatch } from "react-redux";

export const Start = (props) => {
  const dispatch = useDispatch();

  // const counter = useSelector((state) => state.counter.counter);
  // const category = useSelector((state) => state.category);
  // const difficulty = useSelector((state) => state.difficulty);
  // const type = useSelector((state) => state.type);

  // const incrementHandler = () => {
  //   dispatch({ type: "increment" });
  // };

  const setCategory = (value) => {
    dispatch({ type: "setCategory", payload: value });
  };

  const setDifficulty = (value) => {
    dispatch({ type: "setDifficulty", payload: value });
  };

  const setType = (value) => {
    dispatch({ type: "setType", payload: value });
  };

  // console.log(category);
  // console.log(difficulty);
  // console.log(type);
  return (
    <div className="start">
      <div style={{ width: "200px", backgroundColor: "black" }}></div>
      <h1>Quizzical</h1>
      {/* <p>
        Quizzical, is a web based multiple-choice-question system which is
        interactive and fun.
        <br />
        Select a Category,Difficulty and Type to get Started or just press start
        quiz to get random questions.
      </p> */}
      <button className="start--button" onClick={props.onClick}>
        Start Quiz
      </button>

      <div className="select--box">
        <label htmlFor="categories">Select Category:</label>

        <select
          id="categories"
          onChange={(e) => setCategory(e.target.value)}
          name="categories"
        >
          <option value="">All</option>
          <option value="18">Computers</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
        </select>
      </div>

      <div className="select--box">
        <label htmlFor="difficulty">Select Difficulty:</label>

        <select
          id="difficulty"
          onChange={(e) => setDifficulty(e.target.value)}
          name="difficulty"
        >
          <option value="">Mixed</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="select--box">
        <label htmlFor="types">Select Type:</label>

        <select
          id="types"
          onChange={(e) => setType(e.target.value)}
          name="types"
        >
          <option value="">All Types</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </select>
      </div>

      {/* <button className="start--button" onClick={incrementHandler}>
        increase
      </button> */}
    </div>
  );
};
