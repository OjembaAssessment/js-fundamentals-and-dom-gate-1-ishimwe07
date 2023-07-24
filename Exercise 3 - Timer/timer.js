const stopBtn = document.querySelector("#stop");
const startBtn = document.querySelector("#Start");
const resetBtn = document.querySelector("#reset");
const forms = document.querySelector(".forms");
const timeRem = document.querySelector(".tm");
const seconds = document.querySelector("#seconds");
const secs = document.querySelector("#sec");
const minusSign = document.querySelector(".minus");
const plusSign = document.querySelector(".plus");


function timers(){
    if(seconds.value>=0){
        secs.textContent = seconds.value--;
    }

}
startBtn.addEventListener("click", function StartTiming(){
    startBtn.style.display = "none"
    forms.style.display = "none";
    timeRem.style.display = "block";
    stopBtn.style.display = "block";
    setInterval(() => timers()
        , 1000);
});

resetBtn.addEventListener("click", function(){
    location.reload();
});

stopBtn.addEventListener("click", function(){
    clearInterval(timers);
});

minusSign.addEventListener("click", function(){
    setTimeout(() => {
        seconds.value = +seconds.value - 1;
        secs.textContent = seconds.value;
    }, 1);
    
})
plusSign.addEventListener("click", function(){
    setTimeout(() => {
        seconds.value = +seconds.value + 1;
        secs.textContent = seconds.value;
    }, 1);
})

