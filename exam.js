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
    var q21 = document.quiz.question21.value;
9
    var result = document.getElementById("result");

    var quiz = document.getElementById("quiz");

    if (q1=="가지 않았어요") {score++}
    if (q2=="운동을 하지않아요") {score++}
    if (q3=="지금 가면 늦지않을거예요.") {score++}
    if (q4=="도착하면") {score++}
    if (q5=="공주와 결혼한려면 금사과를 가지고와야돼요.") {score++}
    if (q6=="잘 하려면") {score++}
    if (q7=="의사 라고했어요.") {score++}
    if (q8=="학생 이냐고했어요") {score++}
    if (q9=="호주에 산다고 했어요.") {score++}
    if (q10=="열심히 공부하라고 했어요") {score++}
    if (q11=="내일 산에 가자고 했어요") {score++}
    if (q12=="수업이 일찍 끝났다고 했어요") {score++}
    if (q13=="오늘 호주는 날씨가 어떠냐고 했어요") {score++}
    if (q14=="기다리지 말라고했어요") {score++}
    if (q15=="혹시 이거 모르냐고 했어요") {score++}
    if (q16=="내일 수업 몇시인지 안다고 했어요") {score++}
    if (q17=="산책 가자고 했어요") {score++}
    if (q18=="음식을 먹지말라고 했어요") {score++}
    if (q19=="귀엽다고 했어요") {score++}
    if (q20=="먹고있어요") {score++}
    if (q21=="나보다 언니가 키가 커요") {score++}


    quiz.style.display= "none";
    console.log("hello");


    result.textContent= `you got correct ${score} out of 21.`;

    const mom = document.querySelector('#result');
    const listElem = document.createElement('h5');
    listElem.innerHTML = '<a href="quizlist.html">go back</a>';
    mom.appendChild(listElem);

}