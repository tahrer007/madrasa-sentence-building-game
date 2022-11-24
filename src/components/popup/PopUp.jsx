import React, { useEffect, useState } from "react";
import play from "assets/images/play.png";
import "./popup.scss";

function PopUp({startGame}) {
  const [start, setStart] = useState(false);
  useEffect(() => {
    if(start) startGame() ;
  }, [start,startGame]);

  return (
    <div className={start ? "hide-popup" : "popup-container"}>
      <div className="popup">
        <img src={play} width="80" alt="paly" />
        <p className="instructions">
          הרכיבו את המשפטים הבאים עם המילים המצורפות
        </p>
        <button id="start_game-btn" onClick={() => setStart(true)}>
          יַלַّא נְבַּלֵّש - בואו נתחיל
        </button>
      </div>
    </div>
  );
}

export default PopUp;
