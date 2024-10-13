let count = 0;

const counterDisplay = document.getElementById('counter');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const toggleThemeButton = document.getElementById('toggle-theme');

increaseButton.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decreaseButton.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetButton.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function updateDisplay() {
    counterDisplay.textContent = count;
}
