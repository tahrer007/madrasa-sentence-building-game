import React, { useEffect } from "react";
import Question from "components/question/Question";
import { checkAnswer } from "utils/functions";
import { QUESTIONS_NUMBER } from "constants/constants";
import { playSound } from "utils/playSound";

import useGame from "hooks/useGame";

function GameBoard({ gameResult, progress, mute }) {
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
      progress();
      const result = checkAnswer(answer, question);

      if (!mute && answer.audio) playSound(answer.audio);
      if (result) {
        if (!mute) playSound("correct");
        setTotal({
          score: total.score + 1,
          answered: total.answered + 1,
        });
      } else {
        if (!mute) playSound("fail");
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
      <main>
        <Question
          question={question}
          handleAnswer={handleAnswer}
          mute={mute}
          nextQuestion={nextQuestion}
        />
      </main>
      <button onClick={handleClick} disabled={disabled} className={"buttons"}>
        {nextQuestion ? "המשך" : "בדיקה"}
      </button>
      {answer?.length && incorrect ? (
        <div className="answer"> תשובה נכונה: {question.answer} 👎 </div>
      ) : null}

      {answer?.length && !incorrect &&nextQuestion ? <div className="answer"> 👍 </div> : null}
    </>
  );
}

export default GameBoard;
