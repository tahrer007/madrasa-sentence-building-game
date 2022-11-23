import { useEffect, useState } from "react";
import Header from "components/header/Header";
import Result from "./components/Result/Result";
import GameBoard from "./components/gameBoard/GameBoard";
import "./app.scss";

function App() {
  const [gameEnd, setGameEnd] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [counter, setCounter] = useState(0);

  const gameResult = (score) => {
    setGameEnd(true);
    setTotalPoints(score);
  };
  const playSound = (mute) => console.log(mute);
  const progress = () => setCounter(counter + 1);
  return (
    <div className="app-container">
      {/* POP UP */}
      <section>
        <Header playSound={playSound} progress={counter} />

        {gameEnd ? (
          <Result totalPoints={totalPoints} />
        ) : (
          <GameBoard gameResult={gameResult} progress={progress} />
        )}
      </section>
    </div>
  );
}

export default App;
