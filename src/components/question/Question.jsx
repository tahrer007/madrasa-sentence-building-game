import React, { useEffect, useState } from "react";
import { createOptions } from "utils/functions";
import { playSound } from "utils/playSound";
import "./question.scss";

function Question({ question, handleAnswer, mute, nextQuestion }) {
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

  useEffect(() => {
    console.log(optionsArr);
  }, [optionsArr]);

  const pickWord = (word) => {
    const pickedWord = {
      ...word,
      isPicked: true,
    };
    setAnswerArr((state) => [...state, pickedWord]);
    setOptionsArr((state) =>
      [...state.filter((x) => x.id !== pickedWord.id), pickedWord].sort(
        (a, b) => a.id - b.id
      )
    );

    if (!mute) playSound("flip");
  };

  const takeBack = (word) => {
    const returned = {
      ...word,
      isPicked: false,
    };
    setOptionsArr((state) =>
      [...state.filter((x) => x.id !== returned.id), returned].sort(
        (a, b) => a.id - b.id
      )
    );
    setAnswerArr((state) => [...state.filter((x) => x.id !== returned.id)]);
    if (!mute) playSound("flip");
  };

  return (
    //TODO:TO RETURN TO THE SAME ORDER !!!
    <div className="question-container">
      <h3>{question?.sentence}</h3>
      <div className="destination">
        {answerArr
          ? answerArr.map((word) => (
              <button
                key={word.id}
                className="word"
                onClick={() => takeBack(word)}
                disabled={nextQuestion}
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
                {word?.isPicked ? (
                  <button className="picked">
                    <span> {word.word} </span>
                  </button>
                ) : (
                  <button
                    className="word"
                    disabled={nextQuestion}
                    onClick={() => pickWord(word)}
                  >
                    {word.word}
                  </button>
                )}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Question;
