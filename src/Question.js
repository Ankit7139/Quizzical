import React, { useState } from "react";
import { Option } from "./Option";
import { useDispatch } from "react-redux";

export const Question = (props) => {
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const answers = shuffle(props.incorrect_answers.concat(props.correct_answer));

  const [allOptions, setAllOptions] = useState(allOptn());

  const dispatch = useDispatch();

  function allOptn() {
    const allAnswers = [];
    for (let i = 0; i < answers.length; i++) {
      allAnswers.push({
        value: answers[i],
        isClicked: false,
        id: answers[i],
      });
    }
    return allAnswers;
  }

  const countCorrectAnswer = () => {
    dispatch({ type: "countCorrectAnswer" });
  };

  for (let i = 0; i < allOptions.length; i++) {
    if (props.checkAnswers) {
      if (
        allOptions[i].isClicked &&
        allOptions[i].id === props.correct_answer
      ) {
        // props.countCorrectAnswers();
        // console.log("correct");
        countCorrectAnswer();
      }
    }
  }

  function holdOption(id) {
    setAllOptions((prevState) =>
      prevState.map((item) => {
        return item.id === id
          ? { ...item, isClicked: !item.isClicked }
          : { ...item, isClicked: false };
      })
    );
  }

  const options = allOptions.map((item) => (
    <Option
      key={item.id}
      option={item.value}
      id={item.id}
      isClicked={item.isClicked}
      holdOption={() => holdOption(item.id)}
      correct_answer={props.correct_answer}
      checkAnswers={props.checkAnswers}
    />
  ));

  return (
    <div className="qna">
      <p className="question--text">{props.question}</p>
      <div className="options">{options}</div>
      <div className="question--border"></div>
    </div>
  );
};
