const refs = {
    startBtn: document.querySelector('button[data-action="start"'),
    stopBtn: document.querySelector('button[data-action="stop"'),
     body: document.querySelector('body')
},
    colors = [
        '#FFFFFF',
        '#2196F3',
        '#4CAF50',
        '#FF9800',
        '#009688',
        '#795548',
    ];
    const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
        
};

isActive = false;
refs.startBtn.addEventListener('click', start)
refs.stopBtn.addEventListener('click', stop)

function start() {
    if (isActive) { return }
    isActive = true;
   intervalId = setInterval(() => { 
        refs.body.setAttribute("style", `background: ${colors[randomIntegerFromInterval(0, (colors.length - 1))]}`);
   }, 1000)
}

function stop() {
    clearInterval(intervalId);
    isActive = false;
};
