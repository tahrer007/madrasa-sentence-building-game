//select chapter number
import data from "../data/data.json";
import { QUESTIONS_NUMBER } from "../constants/constants";
const selectChapter = () => {};
const selectQuestions = (chapterNum) => {
  const selectedChapter = data[chapterNum];
  const length = selectedChapter.length;
  const indexesArr = [];
  const questionsArr = [];

  while (indexesArr.length !== QUESTIONS_NUMBER) {
    let random;
    random = Math.floor(Math.random() * (length - 0) + 0);
    while (indexesArr.includes(random)) {
      random = Math.floor(Math.random() * (length - 0) + 0);
    }
    indexesArr.push(random);
    questionsArr.push(selectedChapter[random]);
  }
  return questionsArr;
};

export { selectChapter, selectQuestions };
