import React from "react";

export const Option = (props) => {
  const styles1 = {
    backgroundColor: props.isClicked ? "#4ec2ed" : "#F5F7FB",
  };

  const styles2 = {
    backgroundColor:
      props.id === props.correct_answer
        ? "#94D7A2"
        : props.isClicked
        ? "#F8BCBC"
        : "#F5F7FB",
  };

  return (
    <div className="option">
      <button
        className="option--button"
        style={props.checkAnswers ? styles2 : styles1}
        onClick={props.holdOption}
      >
        {props.option}
      </button>
    </div>
  );
};
