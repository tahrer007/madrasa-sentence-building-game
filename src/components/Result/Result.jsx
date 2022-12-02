import { useEffect } from "react";
import { QUESTIONS_NUMBER ,RESULT_DATA} from "constants/constants";
import { playSound } from "utils/playSound";



function Result({ totalPoints }) {
  const win = totalPoints > QUESTIONS_NUMBER / 2;
  const {text, imgSrc} = win ? RESULT_DATA.win : RESULT_DATA.lose ;
useEffect(() => {
  playSound(win ? "correct" : "lose")
}, [])



  return (
    <>
      <p>
        ניקוד: <span className="score">{QUESTIONS_NUMBER}/{totalPoints} </span>
      </p>
      <span className="result-msg"> {text} </span>
      <div className="result-image">
        <img
          className="lose"
          src={imgSrc}
          width="120"
          alt=""
        />
      </div>
    </>
  );
}

export default Result;
