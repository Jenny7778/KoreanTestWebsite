function check() {
    var score = 0;
    
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var q6 = document.quiz.question6.value;
    var q7 = document.quiz.question7.value;
    var q8 = document.quiz.question8.value;
    var q9 = document.quiz.question9.value;
    var q10 = document.quiz.question10.value;
    var q11 = document.quiz.question11.value;
    var q12 = document.quiz.question12.value;
    var q13 = document.quiz.question13.value;
    var q14 = document.quiz.question14.value;
    var q15 = document.quiz.question15.value;
    var q16 = document.quiz.question16.value;
    var q17 = document.quiz.question17.value;
    var q18 = document.quiz.question18.value;
    var q19 = document.quiz.question19.value;
    var q20 = document.quiz.question20.value;
    

    
    var result = document.getElementById("result");

    var quiz = document.getElementById("quiz");

   
    if (q1=="날씨") {score++}
    if (q2=="죄송해요") {score++}
    if (q3=="물") {score++}
    if (q4=="안녕하세요") {score++}
    if (q5=="감사합니다") {score++}
    if (q6=="우유") {score++}
    if (q7=="다음시간에 봐요") {score++}
    if (q8=="커피") {score++}
    if (q9=="병원") {score++}
    if (q10=="자동차") {score++}
    if (q11=="책") {score++}
    if (q12=="열쇠") {score++}
    if (q13=="자전거") {score++}
    if (q14=="기차") {score++}
    if (q15=="바다") {score++}
    if (q16=="생선") {score++}
    if (q17=="옥수수") {score++}
    if (q18=="사과") {score++}
    if (q19=="바나나") {score++}
    if (q20=="딸기") {score++}


    

    quiz.style.display= "none";
    


    result.textContent= `you got correct ${score} out of 20.`;
   

    const mom = document.querySelector('#result');
    const listElem = document.createElement('h5');
    listElem.innerHTML = '<a href="quizlist.html">go back</a>';
    mom.appendChild(listElem);

   


    
}


