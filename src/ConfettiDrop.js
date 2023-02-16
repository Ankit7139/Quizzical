import React from "react";
import Confetti from "react-confetti";
import { useSelector } from "react-redux";

export const ConfettiDrop = () => {
  const correctAnswers = useSelector((state) => state.app.correctAnswers);

  console.log(correctAnswers);

  return correctAnswers > 2 && <Confetti />;
};
