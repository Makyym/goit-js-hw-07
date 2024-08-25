function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.getElementById(`controls`);
const createEl = controlsEl.querySelector(`button[data-create]`);
const destroyEl = controlsEl.querySelector(`button[data-destroy]`);
const inputEl = controlsEl.querySelector(`input`);
const placeToPaste = document.getElementById(`boxes`);
let inputValue = '';

const handleInput = (evt) => {
  inputValue = evt.target.value;
};

inputEl.addEventListener('input', handleInput);

const createBoxes = amount => {
  let result = ``;
  for (let index = 0; index < amount; index++) {
    result += `<div class="box"></div>`
  }
  return result;
}

const addBoxes = () => {
  const number = Number(inputValue);
  if (number > 0 && number <= 100) {
    const boxesValue = createBoxes(number)
    placeToPaste.insertAdjacentHTML('beforeend', boxesValue);
    const boxesEl = document.querySelectorAll(`.box`)
    let boxWidth = 20;
    let boxHeight = 20;
    boxesEl.forEach(box => {
      boxWidth += 10;
      boxHeight += 10;
      box.style.width = `${boxWidth}px`;
      box.style.height = `${boxHeight}px`;
      box.style.backgroundColor = `${getRandomHexColor()}`
    });
  }
  return;
}

function destroyBoxes() {
  placeToPaste.textContent = ``;
};

createEl.addEventListener(`click`, addBoxes);
destroyEl.addEventListener(`click`, destroyBoxes);




