import { useEffect, useState } from "react";
import Result from "./components/Result/Result";
import GameBoard from "./components/gameBoard/GameBoard";
import "./App.css";

function App() {
  const [gameEnd, setGameEnd] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);

  const gameResult = (score) => {
    console.log(score);
    setGameEnd(true);
    setTotalPoints(score);
  };

  return (
    <div className="App">
      <div className="header"></div>
      {gameEnd ? (
        <Result totalPoints={totalPoints} />
      ) : (
        <GameBoard gameResult={gameResult} />
      )}
    </div>
  );
}

export default App;
