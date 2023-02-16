import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function PlayAgain(props) {
  const correctAnswers = useSelector((state) => state.app.correctAnswers);
  const dispatch = useDispatch();

  const resetCount = () => {
    dispatch({ type: "resetCount" });
  };

  return (
    <div className="play--again">
      <h4 className="answers--count">
        You Scored {correctAnswers / 2}/5 correct answers
      </h4>
      <button
        className="check--answers"
        onClick={() => (props.newGame(), props.newQues(), resetCount())}
      >
        Play Again
      </button>
    </div>
  );
}
