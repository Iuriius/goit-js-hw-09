const flatpickr = require("flatpickr");
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
    },
};

const timePicker = document.querySelector("#datetime-picker");
flatpickr(timePicker, { options });

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

let countdownDate = new Date();

const daysElem = document.querySelector("data-days");
const hoursElem = document.querySelector("data-hours");
const minutesElem = document.querySelector("data-minutes");
const secondsElem = document.querySelector("data-seconds");
const timer = document.querySelector("timer");

const startCountdown = () => {
    const now = new Date().getTime();
    const countdown = new Date(countdownDate).getTime();

    daysElem.innerHTML = formatTime(days, "day");
    hoursElem.innerHTML = formatTime(hours, "hour");
    minutesElem.innerHTML = formatTime(minutes, "minute");
    secondsElem.innerHTML = formatTime(seconds, "second");
};