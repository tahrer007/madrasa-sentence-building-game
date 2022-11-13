import React from "react";
import { useState } from "react";
import { selectQuestions } from "../../utils/functions";
import Question from "../question/Question";
const lesson = 1;

function GameBoard(add) {
  const selectedQuestions = selectQuestions(lesson);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(selectedQuestions[index]);
  const [nextQuestion, setNextQuestion] = useState(false); // true : check , false : next !
  const [result,setResult] = useState(0) ; 

  const handleClick = (e) => {
    if (nextQuestion) {
      //move to the next question
      setQuestion(selectedQuestions[index + 1]);
      setIndex(index + 1);
      //TODO:if finished move to results !!
    } else {
      //check the answer !
    }
    setNextQuestion(!nextQuestion);
  };
  return (
    <div>
      <h1> Game Board </h1>
      <Question question={question} />
      <button onClick={handleClick}>{nextQuestion ? "next" : "check"}</button>
    </div>
  );
}

export default GameBoard;
