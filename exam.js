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
    var q22 = document.quiz.question22.value;
    var q23 = document.quiz.question23.value;
    var q24 = document.quiz.question24.value;
    var q25 = document.quiz.question25.value;
    var q26 = document.quiz.question26.value;
    var q27 = document.quiz.question27.value;
    var q28 = document.quiz.question28.value;
    var q29 = document.quiz.question29.value;
    var q30 = document.quiz.question30.value;
    var q31 = document.quiz.question31.value;
    var q32 = document.quiz.question32.value;
    var q33 = document.quiz.question33.value;
    var q34 = document.quiz.question34.value;
    var q35 = document.quiz.question35.value;
    var q36 = document.quiz.question36.value;
    var q37 = document.quiz.question37.value;
    var q38 = document.quiz.question38.value;
    var q39 = document.quiz.question39.value;
    var q40 = document.quiz.question40.value;
    var q41 = document.quiz.question41.value;
    var q42 = document.quiz.question42.value;
    var q43 = document.quiz.question43.value;
    var q44 = document.quiz.question44.value;
    var q45 = document.quiz.question45.value;
    var q46 = document.quiz.question46.value;
    var q47 = document.quiz.question47.value;
    var q48 = document.quiz.question48.value;
    var q49 = document.quiz.question49.value;
    var q50 = document.quiz.question50.value;
    var q51 = document.quiz.question51.value;
    var q52 = document.quiz.question52.value;
    var q53 = document.quiz.question53.value;
    var q54 = document.quiz.question54.value;
    var q55 = document.quiz.question55.value;
    var q56 = document.quiz.question56.value;
    var q57 = document.quiz.question57.value;
9
    var result = document.getElementById("result");

    var quiz = document.getElementById("quiz");

    if (q1=="가지 않았어요") {score++}
    if (q2=="운동을 하지않아요") {score++}
    if (q3=="지금 가면 늦지않을거예요") {score++}
    if (q4=="도착하면") {score++}
    if (q5=="공주와 결혼한려면 금사과를 가지고와야돼요") {score++}
    if (q6=="잘 하려면") {score++}
    if (q7=="의사 라고했어요") {score++}
    if (q8=="학생 이냐고했어요") {score++}
    if (q9=="호주에 산다고 했어요") {score++}
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
    if (q22=="아무리 피곤해도 커피를 너무 많이 마시지마세요") {score++}
    if (q23=="가도돼요?") {score++}
    if (q24=="연습해 봐요") {score++}
    if (q25=="들어본 적 없어요?") {score++}
    if (q26=="가본 적 있어요?") {score++}
    if (q27=="드실") {score++}
    if (q28=="읽은") {score++}
    if (q29=="마시던") {score++}
    if (q30=="듣던") {score++}
    if (q31=="연지씨가 한국어를 잘해졌습니다") {score++}
    if (q32=="주말 이었으면") {score++}
    if (q33=="왔으면") {score++}
    if (q34=="할 일") {score++}
    if (q35=="에") {score++}
    if (q36=="기숙사에서 티비를 봐요") {score++}
    if (q37==" 노래 들는 것을 좋아해요") {score++}
    if (q38=="길이 막히니까 지하철을 탑시다") {score++}
    if (q39=="요리하는 것은") {score++}
    if (q40=="만나려고") {score++}
    if (q41=="오늘 공부를 하려고 해요") {score++}
    if (q42=="지하철 7호선을 타고 가다가 이수역에서 4호선으로 갈아타면 돼요") {score++}
    if (q43=="회사에서 컴퓨터로 일하는 길에 컴퓨터가 꺼져 버렸어요") {score++}
    if (q44=="가는 길에") {score++}
    if (q45=="비가 안 왔으면 좋겠어요") {score++}
    if (q46=="자기 전에 책을 읽어요 - 책을 읽은 후에 자요") {score++}
    if (q47=="한국 음식 만든고 나서 공부 할 거예요") {score++}
    if (q48=="하는 다음에") {score++}
    if (q49=="말고") {score++}
    if (q50=="좋을 거") {score++}
    if (q51=="춤추는거기를") {score++}
    if (q52=="지금 몇시 인지") {score++}
    if (q53=="내일 수업 몇개였는지") {score++}
    if (q54=="편이라고") {score++}
    if (q55=="못 잤거든요") {score++}
    if (q56=="가는 길이에요") {score++}
    if (q57=="안 읽는 편") {score++}

  



    quiz.style.display= "none";
    console.log("hello");


    result.textContent= `you got correct ${score} out of 21.`;

    const mom = document.querySelector('#result');
    const listElem = document.createElement('h5');
    listElem.innerHTML = '<a href="quizlist.html">go back</a>';
    mom.appendChild(listElem);

}