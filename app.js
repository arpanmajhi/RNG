function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeBackgroundColor() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f7b731'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

function updateNumber() {
    const numberOutput = document.getElementById('numberOutput');
    numberOutput.textContent = getRandomNumber(1, 100);
    changeBackgroundColor();
}

// Generate new number every 5 seconds
setInterval(updateNumber, 5000);

// Change color every 15 seconds (quarter of a minute)
setInterval(changeBackgroundColor, 15000);

// Initial setup
updateNumber();