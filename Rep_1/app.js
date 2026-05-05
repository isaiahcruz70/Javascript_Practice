let score = 0;

const countDisplay = document.getElementById('countDisplay');
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
const resetBtn = document.getElementById('resetBtn');
const warningText = document.getElementById('warningText');
const inputNumber = document.getElementById('inputNumber');
const addCustomBtn = document.getElementById('addCustomBtn');
const subtractCustomBtn = document.getElementById('subtractCustomBtn');

const updateDisplay = () => {
    countDisplay.textContent = score;
};

const showWarning = (message) => {
    warningText.textContent = message;
    warningText.style.display = "block";
};

const hideWarning = () => {
    warningText.style.display = "none";
};

const changeScore = (amount) => {
    score = score + amount;
    updateDisplay();
};

const convertNumber = () => {
    let number = Number(inputNumber.value);

    if (inputNumber.value === "") {
        showWarning("Please enter a number!");
        return;
    }

    if (score < 0) {
        showWarning("Score cannot be a negative number!");
        return;
    }

    changeScore(number);
    inputNumber.value = "";
    inputNumber.focus();
    hideWarning();
};

addBtn.addEventListener("click", () => {
    changeScore(1);
    hideWarning();
});

removeBtn.addEventListener("click", () => {
    if (score > 0) {
        changeScore(-1);
    } else {
        showWarning("Score can't be negative!");
    }
});

resetBtn.addEventListener("click", () => {
    score = 0;
    updateDisplay();
    hideWarning();
});

addCustomBtn.addEventListener("click", () => {
    convertNumber();
});

subtractCustomBtn.addEventListener("click", () => {
    convertNumber();
});

inputNumber.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        convertNumber();
    }
});