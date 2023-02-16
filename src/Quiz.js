import React, { useState } from "react";
import { Question } from "./Question";
import PlayAgain from "./PlayAgain";
import { ConfettiDrop } from "./ConfettiDrop";

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
      {checkAnswers && <ConfettiDrop />}
      {questions}
      {checkAnswers ? (
        <PlayAgain newGame={props.newGame} newQues={props.newQues} />
      ) : (
        <div className="quiz--footer">
          <button
            className="check--answers"
            onClick={() => {
              props.newGame();
              props.newQues();
            }}
          >
            Start Over
          </button>
          <button className="check--answers" onClick={handleClick}>
            Check Answers
          </button>
        </div>
      )}
    </div>
  );
};
