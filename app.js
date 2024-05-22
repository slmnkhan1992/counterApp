let countDisplay = document.querySelector('.count')

let count = 0;

function updateCount() {
    countDisplay.textContent = count;
}

// Function to handle decrease button click
function decrease() {
    count--;
    updateCount();
}

// Function to handle reset button click
function reset() {
    count = 0;
    updateCount();
}

// Function to handle increase button click
function increase() {
    count++;
    updateCount();
}
