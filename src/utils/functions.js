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
    do {
      random = Math.floor(Math.random() * (length - 0) + 0);
    } while (indexesArr.includes(random));
    indexesArr.push(random);
    questionsArr.push(selectedChapter[random]);
  }
  return questionsArr;
};

const shuffleOptions = (arr1, arr2) => {
  const shuffledArr = [...arr1, ...arr2]
    .sort(() => Math.random() - 0.5)
    .map((word, index) => ({ ...word, id: Math.random(), optionIndex: index }));
  return shuffledArr;
};

const createOptions = (question) => {
  const correctArr = question.correct.map((word, index) => {
    return {
      orderIndex: index,
      word,
      isPicked: false,
    };
  });
  const incorrectArr = question.incorrect.map((word) => {
    return {
      orderIndex: null,
      word,
      isPicked: false,
    };
  });
  return shuffleOptions(correctArr, incorrectArr);
};

export { selectChapter, selectQuestions, createOptions };
