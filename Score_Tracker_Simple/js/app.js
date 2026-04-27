let points = 0;

const score = document.getElementById('score');
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');

addBtn.addEventListener('click', () => {
    points = points + 5;
    score.textContent = points;
});

removeBtn.addEventListener('click', () => {
    points = points - 5;
    score.textContent = points;
});