import React, { useEffect } from "react";
import { useState } from "react";
import { selectQuestions, checkAnswer } from "../../utils/functions";
import Question from "../question/Question";
const lesson = 1;

function GameBoard(add) {
  const selectedQuestions = selectQuestions(lesson);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(selectedQuestions[index]);
  const [nextQuestion, setNextQuestion] = useState(false); // true : check , false : next !
  const [totalPoints, setTotalPoints] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    setDisabled(!answer?.length && !nextQuestion);
  }, [answer, nextQuestion]);

  const handleAnswer = (answerArr) => setAnswer(answerArr);
  const handleClick = () => {
    setDisabled(true);
    if (nextQuestion) {
      //move to the next question
      setQuestion(selectedQuestions[index + 1]);
      setIndex(index + 1);
      setAnswer([]);
      //TODO:if finished move to results !!
    } else {
      //check the answer !
      const result = checkAnswer(answer, question);
      console.log(result);
      if (result) setTotalPoints(totalPoints + 1);
    }

    setNextQuestion(!nextQuestion);
  };
  return (
    <div>
      <h1> Game Board </h1>
      <Question question={question} handleAnswer={handleAnswer} />
      <button onClick={handleClick} disabled={disabled}>
        {nextQuestion ? "next" : "check"}
      </button>
    </div>
  );
}

export default GameBoard;
