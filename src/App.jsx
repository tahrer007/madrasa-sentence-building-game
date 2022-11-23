import { useEffect, useState } from "react";
import Header from "components/header/Header";
import Result from "./components/Result/Result";
import GameBoard from "./components/gameBoard/GameBoard";
import "./app.scss";

function App() {
  const [gameEnd, setGameEnd] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);

  const gameResult = (score) => {
    setGameEnd(true);
    setTotalPoints(score);
  };

  return (
    <div className="app-container">
      {/* POP UP */}
      <section>
        <Header />

        {gameEnd ? (
          <Result totalPoints={totalPoints} />
        ) : (
          <GameBoard gameResult={gameResult} />
        )}
      </section>
    </div>
  );
}

export default App;
