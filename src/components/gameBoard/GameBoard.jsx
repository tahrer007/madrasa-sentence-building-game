import React from "react";
import { useEffect, useState } from "react";
import { selectQuestions } from "../../utils/functions";
import Question from "../question/Question";

const lesson = 1;

function GameBoard(add) {
  const selectedQuestions = selectQuestions(lesson);
  const [question, setQuestion] = useState(selectedQuestions[0]);
  useEffect(() => {
    console.log(selectedQuestions);
  }, [selectedQuestions]);

  return (
    <div>
      <h1> Game Board </h1>
        <Question/>
      <button> check answer!</button>
    </div>
  );
}

export default GameBoard;
