//stelt alle knoppen in
const start = document.querySelector(`.start`);
const reset = document.querySelector(`.reset`);
const end = document.querySelector(`.end`);

//stelt de tijd input in
const d = document.querySelector(`.days`);
const h = document.querySelector(`.hours`);
const m = document.querySelector(`.minutes`);
const s = document.querySelector(`.seconds`);

let startTimer = null;


// De waarden geven en voorwaarden
function countdowntime(){
    if(d.value == 0 && h.value == 0 && m.value == 0 && s.value == 0){
    //Stopt de timer op 0
        d.value = 0;
        h.value = 0;
        m.value = 0;
        s.value = 0;
        startTimer = clearInterval(startTimer);
    } else if(s.value != 0) {
        //Haalt 1 seconde eraf
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        //Zet seconde naar 59 en haalt 1 van minuut af
        s.value = 59;
        m.value--;
    }else if(h.value != 0 && m.value == 0){
        //Zet minuut naar 59 en haalt 1 van uur af
        m.value = 60;
        h.value--;
    } else if(d.value != 0 && h.value == 0){
        //Zet uur naar 24 en haalt 1 van dag af
        h.value = 24;
        d.value--;
    } if(d.value == 0 && h.value== 0 && m.value == 0 && s.value == 0){
        document.querySelector(".end").style.visibility = "visible";
    }
    return;
}

// het reset de code startTimer
function stopTimer(){
    startTimer = clearInterval(startTimer);
}

start.addEventListener('click', function(){ 
//activeert elke seconde de countdowntime
    function timerStart(){
        startTimer = setInterval(function(){
            countdowntime();
        }, 1000);
    }
    timerStart()
})

// Als je op de reset button klikt dan gaat alles op 0
reset.addEventListener('click', function(){ 
    document.querySelector(".end").style.visibility = "hidden";
    d.value = 0;
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopTimer();
})