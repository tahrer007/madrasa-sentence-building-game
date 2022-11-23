import React ,{useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh ,faVolumeMute } from "@fortawesome/free-solid-svg-icons";

import "./header.scss";

function Header({playSound}) {

  const [time,setTime] = useState(null);
  const [mute,setMute] = useState(false); 

  useEffect(()=>{
    playSound(mute); 
  },[mute ,playSound])

  return (
    <header>
      <div class="time-container">time</div>
      <div class="progress-container"> progress</div>
      <div class="top-buttons-container" onClick={()=>setMute(!mute)}>
            {
              mute ? <FontAwesomeIcon icon={faVolumeMute}/> : <FontAwesomeIcon icon={faVolumeHigh}/> 
            }

      </div>

    </header>
  );
}

export default Header;
