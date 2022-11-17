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
    .map((word, index) => ({ ...word, id: Math.random() }));
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

const checkAnswer = (answer, question) => {
  console.log(answer);
  console.log(question);
  //some questions has orders and the without order
  //with order
  if (question?.orders) {
    const userAnswer = answer.map((word) => word.orderIndex).join("");
    const result = question.orders
      .map((order) => order.join(""))
      .find((element) => element === userAnswer);
    return result;
  }
  //without order
  const userAnswer = answer.map((x) => x.word).join("");
  const result = question.correct.join("");
  return result === userAnswer;
};
export { selectChapter, selectQuestions, createOptions, checkAnswer };
