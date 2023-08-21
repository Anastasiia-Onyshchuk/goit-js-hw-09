    import flatpickr from "flatpickr";
    import "flatpickr/dist/flatpickr.min.css";
    import Notiflix from 'notiflix';


    let refs = {
        dateTimePicker: document.querySelector('#datetime-picker'),
        inputText: document.querySelector('input[type="text"]'),
        startBtn: document.querySelector('button[data-start]'),
        daysCounter: document.querySelector('span[data-days]'),
        hoursCounter:document.querySelector('span[data-hours]'),
        minutesCounter:document.querySelector('span[data-minutes]'),
        secondsCounter:document.querySelector('span[data-seconds]'),
    }
 refs.startBtn.disabled = true;
    const currentTime = new Date();


    let timerId 
    const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
        onClose(selectedDates) {
            if (selectedDates[0].getTime() - currentTime.getTime() < 0) {
                Notiflix.Report.warning("Please choose a date in the future")
                // refs.startBtn.disabled = true;
                // refs.inputText.disabled = true;
                clearInterval(countdownInterval);
            } else {
                refs.startBtn.disabled = false;
                refs.inputText.disabled = false;
                
        }
        // console.log(selectedDates[0]);
    },
    };

    flatpickr(refs.dateTimePicker, options);
    let countdownInterval;

    refs.startBtn.addEventListener('click', () => {
        const selectedDate = refs.dateTimePicker._flatpickr.selectedDates[0];
        let countdownMs = selectedDate.getTime() - currentTime.getTime();
        refs.startBtn.disabled = true;
        refs.inputText.disabled = true;
        function updateTimer() {
            countdownMs -= 1000;
        if (countdownMs < 0) {
        clearInterval(countdownInterval);
        refs.daysCounter.textContent = "00";
        refs.hoursCounter.textContent = "00";
        refs.minutesCounter.textContent = "00";
            refs.secondsCounter.textContent = "00";
        // refs.startBtn.disabled = false;
        refs.inputText.disabled = false;
        }
            const { days, hours, minutes, seconds } = convertMs(countdownMs);
            refs.daysCounter.textContent = addLeadingZero(days);
            refs.hoursCounter.textContent = addLeadingZero(hours);
            refs.minutesCounter.textContent = addLeadingZero(minutes);
            refs.secondsCounter.textContent = addLeadingZero(seconds);
        }

        updateTimer();
        countdownInterval = setInterval(updateTimer, 1000);
    });
    // function onStartBtnClick{

    // }
    // let selectedDates = [dateTimePicker.value];
    function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
    }
    function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
    }