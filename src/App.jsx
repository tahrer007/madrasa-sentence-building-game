import { useEffect, useState } from "react";
import { QUESTIONS_NUMBER } from "./constants/constants";
import Result from "./components/Result/Result";
import GameBoard from "./components/gameBoard/GameBoard";
import "./App.css";

function App() {
  const [answered, setAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const add = (correct) => {
    if (correct) setCorrectAnswers(correctAnswers + 1);
    setAnswered(answered + 1);
  };

  return (
    <div className="App">
      <div className="header"></div>
      {answered === QUESTIONS_NUMBER ? (
        <Result correctAnswers={correctAnswers} />
      ) : (
        <GameBoard add={add} />
      )}
    </div>
  );
}

export default App;
