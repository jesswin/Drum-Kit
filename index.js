//fetching the sticks
let leftStick = document.querySelector(".stick");
let rightStick = document.querySelector(".stick-right");
let swizzle = document.querySelector(".swizzle");

//tracking the keycode
const playSound = (e) => {
  const keyCode = e.keyCode,
    keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

  if (!keyElement) return;

  //moving the stick according to position
  switch (keyCode) {
    case 70:
      leftStick.classList.add("floorPressed");
      setTimeout(() => {
        leftStick.classList.remove("floorPressed");
      }, 150);
      break;
    case 71:
      rightStick.classList.add("midPressed");
      setTimeout(() => {
        rightStick.classList.remove("midPressed");
      }, 150);
      break;
    case 74:
      rightStick.classList.add("highPressed");
      setTimeout(() => {
        rightStick.classList.remove("highPressed");
      }, 150);
      break;
    case 72:
      leftStick.classList.add("snarePressed");
      setTimeout(() => {
        leftStick.classList.remove("snarePressed");
      }, 150);
      break;
    case 66:
      swizzle.classList.add("swizzlePressed");
      setTimeout(() => {
        swizzle.classList.remove("swizzlePressed");
      }, 150);
      break;
    case 86:
      swizzle.classList.add("swizzlePressed");
      setTimeout(() => {
        swizzle.classList.remove("swizzlePressed");
      }, 150);
      break;
    case 69:
      leftStick.classList.add("crashPressed");
      setTimeout(() => {
        leftStick.classList.remove("crashPressed");
      }, 150);
      break;
    case 82:
      leftStick.classList.add("ridePressed");
      setTimeout(() => {
        leftStick.classList.remove("ridePressed");
      }, 150);
      break;
    case 73:
      rightStick.classList.add("hiOpenPressed");
      setTimeout(() => {
        rightStick.classList.remove("hiOpenPressed");
      }, 150);
      break;

    case 75:
      leftStick.classList.add("hiClosePressed");
      setTimeout(() => {
        leftStick.classList.remove("hiClosePressed");
      }, 150);
      break;
  }
  // playing the sound
  const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
  audioElement.currentTime = 0;
  audioElement.play();
};

//clickable for Phone.
const playSoundOnClick = (keyCode) => {
  console.log(keyCode);
  keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

  if (!keyElement) return;

  //moving the stick according to position
  switch (keyCode) {
    case 70:
      leftStick.classList.add("floorPressed");
      setTimeout(() => {
        leftStick.classList.remove("floorPressed");
      }, 150);
      break;
    case 71:
      rightStick.classList.add("midPressed");
      setTimeout(() => {
        rightStick.classList.remove("midPressed");
      }, 150);
      break;
    case 74:
      rightStick.classList.add("highPressed");
      setTimeout(() => {
        rightStick.classList.remove("highPressed");
      }, 150);
      break;
    case 72:
      leftStick.classList.add("snarePressed");
      setTimeout(() => {
        leftStick.classList.remove("snarePressed");
      }, 150);
      break;
    case 66:
      swizzle.classList.add("swizzlePressed");
      setTimeout(() => {
        swizzle.classList.remove("swizzlePressed");
      }, 150);
      break;
    case 86:
      swizzle.classList.add("swizzlePressed");
      setTimeout(() => {
        swizzle.classList.remove("swizzlePressed");
      }, 150);
      break;
    case 69:
      leftStick.classList.add("crashPressed");
      setTimeout(() => {
        leftStick.classList.remove("crashPressed");
      }, 150);
      break;
    case 82:
      leftStick.classList.add("ridePressed");
      setTimeout(() => {
        leftStick.classList.remove("ridePressed");
      }, 150);
      break;
    case 73:
      rightStick.classList.add("hiOpenPressed");
      setTimeout(() => {
        rightStick.classList.remove("hiOpenPressed");
      }, 150);
      break;

    case 75:
      leftStick.classList.add("hiClosePressed");
      setTimeout(() => {
        leftStick.classList.remove("hiClosePressed");
      }, 150);
      break;
  }
  // playing the sound
  const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
  audioElement.currentTime = 0;
  audioElement.play();
};

//attaching listener
window.addEventListener("keydown", playSound);
