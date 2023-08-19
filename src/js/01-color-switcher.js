const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
};

let timerID;

refs.startBtn.addEventListener('click', () => {
    refs.startBtn.classList.add('disabled')
    refs.startBtn.disabled = true;
    timerID = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
        
    }, 1000);
});
refs.stopBtn.addEventListener('click', () => {
    refs.startBtn.classList.remove('disabled');
    refs.startBtn.disabled = false;
    clearInterval(timerID);
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}