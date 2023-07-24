const stopBtn = document.querySelector("#stop");
const startBtn = document.querySelector("#start");
const forms = document.querySelector(".forms");
const timeRem = document.querySelector(".tm");


function startTimer(){
   // startBtn.style.display = "none";
    stopBtn.styles.display = "block";
    forms.styles.display = "none";
    timeRem.styles.display = "block"
}

startBtn.addEventListener("click", startTimer())