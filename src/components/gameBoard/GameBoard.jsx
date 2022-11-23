import React, { useEffect } from "react";
import Question from "components/question/Question";
import { checkAnswer } from "utils/functions";
import { QUESTIONS_NUMBER } from "constants/constants";

import useGame from "hooks/useGame";

function GameBoard({ gameResult ,progress ,mute}) {
  const {
    selectedQuestions,
    index,
    setIndex,
    question,
    setQuestion,
    nextQuestion,
    setNextQuestion,
    disabled,
    setDisabled,
    answer,
    setAnswer,
    total,
    setTotal,
    incorrect,
    setIncorrect,
  } = useGame();

  useEffect(() => {
    setDisabled(!answer?.length && !nextQuestion);
  }, [answer, nextQuestion, setDisabled]);

  useEffect(() => {
    if (!total?.answered) return;
    if (total?.answered === QUESTIONS_NUMBER) gameResult(total.score);
  }, [gameResult, total?.answered, total.score]);

  const handleAnswer = (answerArr) => setAnswer(answerArr);
  const handleClick = () => {
    setDisabled(true);
    if (nextQuestion) {
      //move to the next question
      setAnswer([]);
      setQuestion(selectedQuestions[index + 1]);
      setIndex(index + 1);
      setIncorrect(false);
     
    } else {
      const result = checkAnswer(answer, question);
      progress();
      if (result) {
        setTotal({
          score: total.score + 1,
          answered: total.answered + 1,
        });
      } else {
        setTotal({
          score: total.score,
          answered: total.answered + 1,
        });
        setIncorrect(true);
      }
    }

    setNextQuestion(!nextQuestion);
  };
  return (
    <>
      <Question question={question} handleAnswer={handleAnswer} mute={mute}/>
      <button onClick={handleClick} disabled={disabled}>
        {nextQuestion ? "next" : "check"}
      </button>
      {answer?.length && incorrect ? (
        <div className="correctAnswer">{question.answer}</div>
      ) : null}
    </>
  );
}

export default GameBoard;
