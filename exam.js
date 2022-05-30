function check() {
    var score = 0;
    
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var q6 = document.quiz.question6.value;
    var q7 = document.quiz.question7.value;

    var result = document.getElementById("result");

    var quiz = document.getElementById("quiz");

    if (q1=="더워요") {score++}
    if (q2=="저기예요") {score++}
    if (q3=="천천히") {score++}
    if (q4=="내일은 바빠요") {score++}
    if (q5=="직업") {score++}
    if (q6=="친구한테 편지가 써요.") {score++}
    if (q7=="가") {score++}


    quiz.style.display= "none";
    console.log("hello");


    result.textContent= `you got correct ${score} out of 7.`;

    const mom = document.querySelector('#result');
    const listElem = document.createElement('h5');
    listElem.innerHTML = '<a href="quizlist.html">go back</a>';
    mom.appendChild(listElem);

}