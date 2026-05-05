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
}

//? Calculates score based on number
const calcScore = (int) => {
    score = score + int;
    updateDisplay();
    hideWarning();
}

const convertNumber = (int) => {
    let number = Number(inputNumber.value);

    if (inputNumber.value === "") {
        showWarning("Please enter a number!");
        return;
    }

    if (score < 0) {
        showWarning("Score cannot be a negative number!");
        return;
    }

    calcScore(int);
    inputNumber.value = "";
    inputNumber.focus();
    hideWarning();
};

//? Displays a custom warning
const displayWarning = (message) => {
    warningText.style.display = "block";
    warningText.textContent = message;
    warningText.style.color = "red";
};

//? Hides warning
const hideWarning = () => {
    warningText.style.display = "none";
}

//? adds a point to score
addBtn.addEventListener('click', () => {
    calcScore(1);
});

//? Removes 1 point from score
removeBtn.addEventListener('click', () => {
    if (score > 0) {
        calcScore(-1);
    } else {
        displayWarning("Number can't be negative!");
    }
});

//? Resets score to 0
resetBtn.addEventListener('click', () => {
    score = 0;
    updateDisplay();
    hideWarning();
});

//? This adds users custom number
addCustomBtn.addEventListener('click', () => {
    convertNumber();
});

//? This removes a custom number from score but doesn't allow the score to go under 0
subtractCustomBtn.addEventListener('click', () => {
    convertNumber();
    if (numberInput < score) {
        calcScore(-numberInput);
    } else {
        displayWarning("Can't Subtract that amount! Score can't go below 0!");
    }
});

inputNumber.addEventListener('keydown', () => {
    if (event.key === 'Enter') {
        calcScore(numberInput);
    }
})