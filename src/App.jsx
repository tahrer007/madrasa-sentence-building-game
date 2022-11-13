import { useEffect, useState } from "react";
import Result from "./components/Result/Result";
import GameBoard from "./components/gameBoard/GameBoard";
import "./App.css";

function App() {
  const [gameEnd, setGameEnd] = useState(false);
  let totalPoints;

  const gameResult = (score) => {
    setGameEnd(true);
    totalPoints = score;
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
