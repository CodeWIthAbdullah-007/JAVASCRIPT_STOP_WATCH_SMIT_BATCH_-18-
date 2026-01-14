var mili = 0;
var second = 0;
var minute = 0;
var hour = 0;

var miliSecond = document.getElementById("miliSeconds");
var secondsEl = document.getElementById("seconds");
var minutesEl = document.getElementById("minutes");
var hoursEl = document.getElementById("hours");

var interval;

function start(){
    if(interval) return;

    interval = setInterval(function(){
        mili++;
        miliSecond.innerHTML = mili < 10 ? "0" + mili : mili;

        if(mili >= 100){
            second++;
            secondsEl.innerHTML = second < 10 ? "0" + second : second;
            mili = 0;
        }

        if(second >= 60){
            minute++;
            minutesEl.innerHTML = minute < 10 ? "0" + minute : minute;
            second = 0;
        }

        if(minute >= 60){
            hour++;
            hoursEl.innerHTML = hour < 10 ? "0" + hour : hour;
            minute = 0;
        }
    },10);
}

function stop(){
    clearInterval(interval);
    interval = null;
}

function reset(){
    stop();
    mili = second = minute = hour = 0;
    miliSecond.innerHTML = "00";
    secondsEl.innerHTML = "00";
    minutesEl.innerHTML = "00";
    hoursEl.innerHTML = "00";
}

function darkMode(){
    document.body.classList.add("dark");
}

function lightMode(){
    document.body.classList.remove("dark");
}
