import React from "react";
import { useEffect, useState } from "react";
import { selectQuestions } from "../../utils/functions";
import Question from "../question/Question";
import Button from "../reusable/button/Button";

const lesson = 1;

function GameBoard(add) {
  const selectedQuestions = selectQuestions(lesson);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(selectedQuestions[index]);
  useEffect(() => {
    console.log(selectedQuestions);
  }, [selectedQuestions]);

  const handleClick = (e) => {
    console.log(index);
    setQuestion(selectedQuestions[index + 1]);
    setIndex(index + 1);
  };

  return (
    <div>
      <h1> Game Board </h1>
      <Question question={question} />
      <button onClick={handleClick}> check me !! </button>
    </div>
  );
}

export default GameBoard;
