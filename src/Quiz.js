import React, { useState } from "react";
import { Question } from "./Question";
import PlayAgain from "./PlayAgain";
import Confetti from "react-confetti";

export const Quiz = (props) => {
  const [checkAnswers, setCheckAnswers] = useState(false);

  function decode(str) {
    let txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }

  const questions = props.data.map((item) => (
    <Question
      key={item.question}
      question={decode(item.question)}
      correct_answer={decode(item.correct_answer)}
      incorrect_answers={item.incorrect_answers.map((item) => decode(item))}
      checkAnswers={checkAnswers}
    />
  ));

  function handleClick() {
    setCheckAnswers((prevState) => !prevState);
  }

  return (
    <div className="quiz">
      {checkAnswers && <Confetti />}
      {questions}
      {checkAnswers ? (
        <PlayAgain newGame={props.newGame} newQues={props.newQues} />
      ) : (
        <button className="check--answers" onClick={handleClick}>
          Check Answers
        </button>
      )}
    </div>
  );
};
