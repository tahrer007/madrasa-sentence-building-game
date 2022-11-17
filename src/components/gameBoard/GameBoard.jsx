import React, { useEffect } from "react";
import { useState } from "react";
import Question from "components/question/Question";
import { selectQuestions, checkAnswer } from "utils/functions";
import { QUESTIONS_NUMBER } from "constants/constants";
const lesson = 1;

function GameBoard({ gameResult }) {
  const selectedQuestions = selectQuestions(lesson);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(selectedQuestions[index]);
  const [nextQuestion, setNextQuestion] = useState(false); // true : check , false : next !
  const [disabled, setDisabled] = useState(true);
  const [answer, setAnswer] = useState(null);
  const [total, setTotal] = useState({
    score: 0,
    answered: 0,
  });
  const [incorrect, setIncorrect] = useState(false);

  useEffect(() => {
    setDisabled(!answer?.length && !nextQuestion);
  }, [answer, nextQuestion]);
  //check if the game end
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
      //check the answer !
      const result = checkAnswer(answer, question);
      //console.log(answer) 
      //console.log(question) 
     // console.log(result)
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
    <div>
      <Question question={question} handleAnswer={handleAnswer} />
      <button onClick={handleClick} disabled={disabled}>
        {nextQuestion ? "next" : "check"}
      </button>
      {answer?.length && incorrect ? (
        <div className="correctAnswer">{question.answer}</div>
      ) : null}
    </div>
  );
}

export default GameBoard;
