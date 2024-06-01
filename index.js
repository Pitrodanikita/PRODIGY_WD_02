const timerElemnet = document.getElementById("timer");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const stopButton = document.getElementById("stop");

let startTime = 0
let elapesTime = 0
let timeInterval;


function startTimer(){
    startTime = Date.now() - elapesTime; 

    timeInterval = setInterval(() => {

        elapesTime = Date.now() - startTime;
        timerElemnet.textContent = formatTime(elapesTime);

    },10)

    startButton.disabled = true;
    stopButton.disabled = false;
}

function formatTime(elapesTime){
    const miliSec = Math.floor((elapesTime % 1000)/10);
    const second = Math.floor((elapesTime % (1000 * 60))/1000);
    const minute = Math.floor((elapesTime % (1000 * 60 * 60))/(1000 * 60 ));
    const hour = Math.floor(elapesTime /(1000 * 60 *60 ));

    return (
    (hour? (hour > 9 ? hour: "0"+ hour): "00") + ":" +
    (minute? (minute > 9 ? minute: "0"+ minute): "00") + ":" +
    (second? (second > 9 ? second: "0"+ second): "00") + "." + 
    (miliSec > 9 ? miliSec : "0"+ miliSec)
    )
}
startButton.addEventListener("click",startTimer);

function resetTimer(){
    clearInterval(timeInterval);

    elapesTime = 0;
    timerElemnet.textContent = "00:00:00";
    stopButton.disabled = true;
    startButton.disabled = false;
}
resetButton.addEventListener("click",resetTimer);

function stopTimer(){
    clearInterval(timeInterval);
    stopButton.disabled = true;
    startButton.disabled = false;
}
stopButton.addEventListener("click",stopTimer);




