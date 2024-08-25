const inputEl = document.getElementById(`name-input`);
const spanEl = document.getElementById(`name-output`)
const handleInput = (evt) => {
    const userName = evt.target.value.trim();
    if (userName !== ``) {
        return spanEl.textContent = userName;
    };
};

inputEl.addEventListener(`input`, handleInput);