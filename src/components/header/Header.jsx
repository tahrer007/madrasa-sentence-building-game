import React, { useState, useEffect ,useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { QUESTIONS_NUMBER } from "constants/constants";
import ProgressBar from "@ramonak/react-progress-bar";

import "./header.scss";

function Header({ playSound, progress ,gameEnd }) {
  const [timer, setTimer] = useState(null);
  const [isActive, setIsActive] = useState(false) ;
  const [mute, setMute] = useState(false);
  const countRef = useRef(null) ;

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    playSound(mute);
  }, [mute, playSound]);

 


  return (
    <header>
      <div className="time-container">time</div>
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
          <FontAwesomeIcon icon={faVolumeMute} />
        ) : (
          <FontAwesomeIcon icon={faVolumeHigh} />
        )}
      </div>
    </header>
  );
}

export default Header;
