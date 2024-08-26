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
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const width = `${boxSize + i * 10}px`;
    const height = `${boxSize + i * 10}px`;
    const backgroundColor = getRandomHexColor();
    result += `<div class="box" style="width: ${width}; height: ${height}; background-color: ${backgroundColor};"></div>`;
  }
  return result;
}

const addBoxes = () => {
  placeToPaste.textContent = ``;
  const number = Number(inputValue);
  inputEl.value = '';
  inputValue = ``;
  if (number > 0 && number <= 100) {
    const boxesValue = createBoxes(number);
    placeToPaste.insertAdjacentHTML('beforeend', boxesValue);
  }
  return;
}

function destroyBoxes() {
  placeToPaste.textContent = ``;
};

createEl.addEventListener(`click`, addBoxes);
destroyEl.addEventListener(`click`, destroyBoxes);




