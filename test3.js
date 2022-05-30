var startBtn = document.querySelector(".start_btn button");
var infoBox = document.querySelector(".info_box");
var quizBox = document.querySelector(".quiz_box");
var continue_btn =  document.querySelector(".buttons .restart");
var quit =  document.querySelector(".buttons .quit");
const option_list = document.querySelector(".option_list");
const timeCount = quizBox.querySelector(".time_sec");
const timeLine = quizBox.querySelector(".time_line");
startBtn.onclick = function(){
    infoBox.classList.add("activeInfo");
};

quit.onclick = function(){
    infoBox.classList.remove("activeInfo");
};


continue_btn.onclick = function() {
    infoBox.classList.remove("activeInfo");
    quizBox.classList.add("activeQuiz");
    showQustions(0);
    queCounter(1);
    startTimer(40);
    startTimerLine(0);
    nextBtn.style.display= "none";
}


