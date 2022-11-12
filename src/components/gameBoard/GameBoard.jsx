import React from "react";
import { useEffect, useState } from "react";
import { selectQuestions } from "../../utils/functions";

const lesson = 1;

function GameBoard(add) {
  const selectedQuestions = selectQuestions(lesson);
  useEffect(() => {
    console.log(selectedQuestions);
  }, [selectedQuestions]);

  return (
    <div>
      <h1> Game Board </h1>
      <div className="answer"></div>
      <div className="options"></div>
      <button> check answer!</button>
    </div>
  );
}

export default GameBoard;
