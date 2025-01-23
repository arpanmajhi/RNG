// Get the element
const randomNumberElement = document.getElementById('random-number');

// Function to generate a random number from 25, 50, 75, 100
function generateRandomNumber() {
    const numbers = [25, 50, 75, 100];
    randomNumberElement.textContent = numbers[Math.floor(Math.random() * numbers.length)];
}

// Generate a new random number every 5 seconds
setInterval(generateRandomNumber, 5000);

// Generate the first random number immediately
generateRandomNumber();
