import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { QUESTIONS_NUMBER } from "constants/constants";
import ProgressBar from "@ramonak/react-progress-bar";

import "./header.scss";

function Header({ playSound, progress, gameEnd, newGame }) {
  const [timer, setTimer] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [mute, setMute] = useState(false);
  const increment = useRef(null);
  useEffect(() => {
    if (newGame) {
      increment.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }
  }, [newGame]);

  useEffect(() => {
    console.log(gameEnd);
    if (gameEnd) {
      clearInterval(increment.current);
    }
  }, [gameEnd]);

  useEffect(() => {
    playSound(mute);
  }, [mute, playSound]);

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    return `${getMinutes}:${getSeconds}`;
  };

  return (
    <header>
      <div className="time-container">{formatTime()}</div>
      <div className="progress-container">
        <ProgressBar
         completed={progress}
         maxCompleted={QUESTIONS_NUMBER}
         className="wrapper"
         barContainerClassName="container"
         bgColor="#7ec900"
         customLabel=" "
        

        />
      </div>
      <div className="top-buttons-container" onClick={() => setMute(!mute)}>
        {mute ? (
          <FontAwesomeIcon icon={faVolumeMute} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faVolumeHigh} size="2x" />
        )}
      </div>
    </header>
  );
}

export default Header;
