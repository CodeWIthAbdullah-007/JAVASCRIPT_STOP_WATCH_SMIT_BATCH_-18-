var mili = 0;
var second = 0;
var minute = 0;
var hour = 0;

var miliSecond = document.getElementById("miliSeconds");
var secondsEl = document.getElementById("seconds");
var minutesEl = document.getElementById("minutes");
var hoursEl = document.getElementById("hours");

var interval;

function start() {
    interval = setInterval(function () {
        mili++;
        if(mili < 10) miliSecond.innerHTML = "0" + mili;
        else miliSecond.innerHTML = mili;

        if (mili >= 100) {
            second++;
            if(second < 10) secondsEl.innerHTML = "0" + second;
            else secondsEl.innerHTML = second;
            mili = 0;
        }

        if (second >= 60) {
            minute++;
            if(minute < 10) minutesEl.innerHTML = "0" + minute;
            else minutesEl.innerHTML = minute;
            second = 0;
        }

        if (minute >= 60) {
            hour++;
            if(hour < 10) hoursEl.innerHTML = "0" + hour;
            else hoursEl.innerHTML = hour;
            minute = 0;
        }

    }, 10);
}

function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    mili = 0; second = 0; minute = 0; hour = 0;
    miliSecond.innerHTML = "00";
    secondsEl.innerHTML = "00";
    minutesEl.innerHTML = "00";
    hoursEl.innerHTML = "00";
}
