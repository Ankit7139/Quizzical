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
        You Scored {correctAnswers}/5 correct answers <br />
        {correctAnswers > 2
          ? "More than 60% Confetti drop for You ! ! !"
          : "Less than 60% You can try again"}
      </h4>
      <button
        className="check--answers"
        onClick={() => {
          props.newGame();
          props.newQues();
          resetCount();
        }}
      >
        Play Again
      </button>
    </div>
  );
}
