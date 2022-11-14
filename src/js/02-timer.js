import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.querySelector('#datetime-picker'),
    startButton: document.querySelector('button'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};
refs.startButton.disabled = true;
console.log(refs.input);

const currentTime = new Date()
const options = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const targetDate = selectedDates[0];
        if (targetDate < currentTime) {
            alert('Please choose a date in the future');
            refs.startButton.disabled = true;
            return
        } else { refs.startButton.disabled = false; }
    },
};

refs.startButton.addEventListener('click', changeTimerValue)
function changeTimerValue() {
    refs.startButton.disabled = true;
    refs.input.disabled = true;
    let timerId = setInterval(() => {
        let restTime = new Date(refs.input.value) - new Date();
        if (restTime <= 1000) { clearInterval(timerId) }
        let timerInfo = convertMs(restTime);
        Object.entries(timerInfo).forEach(([name, value]) => {
            refs[name].textContent = addZero(value)
        })
    }, 1000)
}

function addZero(value) {
    return String(value).padStart(2, "0")
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
flatpickr(refs.input, options);