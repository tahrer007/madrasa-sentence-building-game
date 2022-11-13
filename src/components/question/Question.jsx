import React, { useEffect, useState } from "react";
import Options from "./options/Options";
import Sentence from "./sentence/Sentence";
import { createOptions } from "../../utils/functions";

function Question({ question }) {
  const [optionsArr, setOptionsArr] = useState(createOptions(question));
  useEffect(() => {
    if (!question) return;
  }, [question]);

  return (
    <div>
      <Sentence sentence={question?.sentence} />
      <Options question={question} />
    </div>
  );
}

export default Question;
