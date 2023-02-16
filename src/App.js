import React, { useState, useEffect } from "react";
import { Quiz } from "./Quiz";
import { Start } from "./Start";
import { useSelector } from "react-redux";

function App() {
  const [start, setStart] = useState(false);
  const [data, setData] = useState([]);
  const [newGame, setNewGame] = useState(false);
  const category = useSelector((state) => state.app.category);
  const difficulty = useSelector((state) => state.app.difficulty);
  const type = useSelector((state) => state.app.type);

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=${type}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, [newGame, category, difficulty, type]);

  const handleClick = () => {
    setStart((prevStart) => !prevStart);
  };

  function startNewGame() {
    setNewGame((prev) => !prev);
  }

  return (
    <div className="container">
      {start ? (
        <Quiz data={data} newGame={handleClick} newQues={startNewGame} />
      ) : (
        <Start onClick={handleClick} />
      )}
    </div>
  );
}

export default App;
