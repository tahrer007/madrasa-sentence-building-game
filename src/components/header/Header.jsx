import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { QUESTIONS_NUMBER } from "constants/constants";
import ProgressBar from "@ramonak/react-progress-bar";

import "./header.scss";

function Header({ playSound, progress }) {
  const [time, setTime] = useState(null);
  const [mute, setMute] = useState(false);
  //const [progress,setProgress] = useState(0);

  useEffect(() => {
    playSound(mute);
  }, [mute, playSound]);

  useEffect(() => {
    console.log(progress);
  }, [progress]);

  return (
    <header>
      <div className="time-container">time</div>
      <div className="progress-container">
        <ProgressBar
          completed={progress / QUESTIONS_NUMBER}
          maxCompleted={1}
          className="wrapper"
          barContainerClassName="container"
          bgColor="#7ec900"
          customLabel=" "
        />
      </div>
      <div className="top-buttons-container" onClick={() => setMute(!mute)}>
        {mute ? (
          <FontAwesomeIcon icon={faVolumeMute} />
        ) : (
          <FontAwesomeIcon icon={faVolumeHigh} />
        )}
      </div>
    </header>
  );
}

export default Header;
