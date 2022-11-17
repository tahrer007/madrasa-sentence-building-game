import  { useState } from "react";
import { selectQuestions } from "utils/functions";
const lesson = 1;
const useGame = () => {
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
  return {
    selectedQuestions ,
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
  };
};

export default useGame;
