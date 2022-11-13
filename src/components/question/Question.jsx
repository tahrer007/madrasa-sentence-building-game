import React, { useEffect, useState } from "react";
import { createOptions } from "utils/functions";
import "./question.css";

function Question({ question, handleAnswer  }) {
  const [answerArr, setAnswerArr] = useState([]);
  const [optionsArr, setOptionsArr] = useState(null);
 

  useEffect(() => {
    if (!question) return;
    setOptionsArr(createOptions(question));
    setAnswerArr([]);
  }, [question]);

  useEffect(() => {
    handleAnswer(answerArr);
  }, [answerArr, handleAnswer]);

  const pickWord = (word) => {
    const pickedWord = {
      ...word,
      isPicked: true,
    };
    setAnswerArr((state) => [...state, pickedWord]);
    setOptionsArr((state) => [
      ...state.filter((x) => x.id !== pickedWord.id),
      pickedWord,
    ]);
  };

  const takeBack = (word) => {
    const returned = {
      ...word,
      isPicked: false,
    };
    setOptionsArr((state) => [
      ...state.filter((x) => x.id !== returned.id),
      returned,
    ]);
    setAnswerArr((state) => [...state.filter((x) => x.id !== returned.id)]);
  };

  return (
    <div>
      <div>{question?.sentence}</div>
      <div className="destination">
        {answerArr
          ? answerArr.map((word) => (
              <button
                key={word.id}
                className="word"
                onClick={() => takeBack(word)}
              >
                {word.word}
              </button>
            ))
          : null}
      </div>
      <div className="origin">
        {optionsArr
          ? optionsArr.map((word) => (
              <div key={word.id} className="word-container">
                {!word?.isPicked ? (
                  <button className="word" onClick={() => pickWord(word)}>
                    {word.word}
                  </button>
                ) : null}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Question;
