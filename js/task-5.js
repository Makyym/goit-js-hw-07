function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const checkColor = document.querySelector(`.color`);
const colorBtnEl = document.querySelector(`.change-color`);
const body = document.getElementsByTagName(`body`);

const changeColor = (evt) => {
  const color = getRandomHexColor();
  checkColor.textContent = `${color}`;
  body[0].style.backgroundColor = `${color}`;
  return;
}

colorBtnEl.addEventListener(`click`, changeColor)