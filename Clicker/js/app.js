let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

increaseBtn.addEventListener("click", () => {
    // increase count
    count = count + 1;
    countDisplay.textContent = count;
    // update the display
});

decreaseBtn.addEventListener("click", () => {
    // decrease count
    count = count - 1;
    countDisplay.textContent = count;
    // update the display
});