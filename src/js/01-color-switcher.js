function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let intervalId = null;

const startButton = document.querySelector('button[data-start]');
startButton.addEventListener('click', function onClick(event) {
    function interval() {
        startButton.setAttribute('disabled', true);
        document.body.style.backgroundColor = getRandomHexColor()
    }
    intervalId = setInterval(interval, 1000);
});

const stopButton = document.querySelector('button[data-stop]');
stopButton.addEventListener('click', function onClick(event) {
    startButton.removeAttribute('disabled');
    clearInterval(intervalId);
});