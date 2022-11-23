import applause from "assets/sounds/applause.wav";
import correct from "assets/sounds/correct.wav";
import fail from "assets/sounds/fail.mp3";
import flip from "assets/sounds/flip.mp3";

const playSound = (sound) => {
  switch (sound) {
    case "applause":
      new Audio(applause).play();
      break;

    case "correct":
      new Audio(correct).play();
      break;

    case "fail":
      new Audio(fail).play();
      break;
    case "flip":
      new Audio(flip).play();
      break;

    default:
      new Audio(sound).play(); //answer sound , external url
  }
};

export { playSound };
