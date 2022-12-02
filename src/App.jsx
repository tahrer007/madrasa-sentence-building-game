import { useState } from "react";
import Header from "components/header/Header";
import PopUp from "components/popup/PopUp";
import Result from "./components/Result/Result";
import GameBoard from "./components/gameBoard/GameBoard";
import "./app.scss";

function App() {
  const [newGame, setnewGame] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [counter, setCounter] = useState(0);
  const [mute, setMute] = useState(false);

  const gameResult = (score) => {
    setGameEnd(true);
    setTotalPoints(score);
  };
  const playSound = (mute) => setMute(mute);
  const progress = () => setCounter(counter + 1);
  const startGame = () => setnewGame(true);
  return (
    <div className="app-container">
      <PopUp startGame={startGame} />

      <section className="main-section">
        <Header
          playSound={playSound}
          progress={counter}
          gameEnd={gameEnd}
          newGame={newGame}
        />

        {gameEnd ? (
          <Result totalPoints={totalPoints} />
        ) : (
          <GameBoard gameResult={gameResult} progress={progress} mute={mute} />
        )}
      </section>
    </div>
  );
}

export default App;
