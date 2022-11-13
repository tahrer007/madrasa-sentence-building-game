import React, { useEffect, useState } from "react";
import { createOptions } from "../../utils/functions";
import "./question.css";
function Question({ question }) {
  const [optionsArr, setOptionsArr] = useState(null);
  const [answerArr, setAnswerArr] = useState([]);

  useEffect(() => {
    if (!question) return;
    setOptionsArr(createOptions(question));
  }, [question]);
  useEffect(() => {
    console.log(optionsArr);
  }, [optionsArr]);

  const pickWord = (option) => {
    const pickedWord = {
      ...option,
      isPicked: true,
    };
    setAnswerArr((state) => [...state, pickedWord]);
    setOptionsArr((state) => [
      ...state.filter((x) => x.id !== option.id),
      pickedWord,
    ]);
  };

  return (
    <div>
      <div>{question?.sentence}</div>
      <div className="destination">
        {answerArr
          ? answerArr.map((word) => (
              <button key={word.id} className="word">
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
