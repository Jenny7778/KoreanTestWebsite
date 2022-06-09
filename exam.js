function check() {
    var score = 0;
    
    var q1 = document.quiz.question1;
    var q2 = document.quiz.question2;
    var q3 = document.quiz.question3;
    var q4 = document.quiz.question4;
    var q5 = document.quiz.question5;
    var q6 = document.quiz.question6;
    var q7 = document.quiz.question7;
    var q8 = document.quiz.question8;
    var q9 = document.quiz.question9;
    var q10 = document.quiz.question10;
    var q11 = document.quiz.question11;
    var q12 = document.quiz.question12;
    var q13 = document.quiz.question13;
    var q14 = document.quiz.question14;
    var q15 = document.quiz.question15;
    var q16 = document.quiz.question16;
    var q17 = document.quiz.question17;
    var q18 = document.quiz.question18;
    var q19 = document.quiz.question19;
    var q20 = document.quiz.question20;
    var q21 = document.quiz.question21;
    var q22 = document.quiz.question22;
    var q23 = document.quiz.question23;
    var q24 = document.quiz.question24;
    var q25 = document.quiz.question25;
    var q26 = document.quiz.question26;
    var q27 = document.quiz.question27;
    var q28 = document.quiz.question28;
    var q29 = document.quiz.question29;
    var q30 = document.quiz.question30;
    var q31 = document.quiz.question31;
    var q32 = document.quiz.question32;
    var q33 = document.quiz.question33;
    var q34 = document.quiz.question34;
    var q35 = document.quiz.question35;
    var q36 = document.quiz.question36;
    var q37 = document.quiz.question37;
    var q38 = document.quiz.question38;
    var q39 = document.quiz.question39;
    var q40 = document.quiz.question40;
    var q41 = document.quiz.question41;
    var q42 = document.quiz.question42;
    var q43 = document.quiz.question43;
    var q44 = document.quiz.question44;
    var q45 = document.quiz.question45;
    var q46 = document.quiz.question46;
    var q47 = document.quiz.question47;
    var q48 = document.quiz.question48;
    var q49 = document.quiz.question49;
    var q50 = document.quiz.question50;
    var q51 = document.quiz.question51;
    var q52 = document.quiz.question52;
    var q53 = document.quiz.question53;
    var q54 = document.quiz.question54;
    var q55 = document.quiz.question55;
    var q56 = document.quiz.question56;
    var q57 = document.quiz.question57;
    var q58 = document.quiz.question58;
    var q59 = document.quiz.question59;
    var q60 = document.quiz.question60;

    var result = document.getElementById("result");

  
    let questions = [q1, q2, q3, q4, q5,q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25,q26, q27, q28, q29, q30, q31, q32,q33,q34,q35,q36, q37, q38, q39, q40, q41,q42,q43,q44, q45,q46, q47,q48,q49,q50, q51, q52, q53,q54,q55,q56, q57,q58, q59,q60];  
    let answers = ["가지 않았어요","운동을 하지않아요","지금 가면 늦지않을거예요","도착하면","공주와 결혼한려면 금사과를 가지고와야돼요", "잘 하려면", "의사 라고했어요","학생 이냐고했어요","호주에 산다고 했어요","열심히 공부하라고 했어요","내일 산에 가자고 했어요","수업이 일찍 끝났다고 했어요","오늘 호주는 날씨가 어떠냐고 했어요","기다리지 말라고했어요",
    "혹시 이거 모르냐고 했어요","내일 수업 몇시인지 안다고 했어요","산책 가자고 했어요","음식을 먹지말라고 했어요","귀엽다고 했어요","먹고있어요","나보다 언니가 키가 커요","아무리 피곤해도 커피를 너무 많이 마시지마세요","가도돼요?", "연습해 봐요","들어본 적 없어요",
    "가본 적 있어요","드실","읽은","마시던","듣던","연지씨가 한국어를 잘해졌습니다","주말 이었으면","왔으면","할 일","에","기숙사에서 티비를 봐요","노래 들는 것을 좋아해요","길이 막히니까 지하철을 탑시다","요리하는 것은","만나려고",
    "오늘 공부를 하려고 해요", "지하철 7호선을 타고 가다가 이수역에서 4호선으로 갈아타면 돼요","회사에서 컴퓨터로 일하는 길에 컴퓨터가 꺼져 버렸어요","가는 길에","비가 안 왔으면 좋겠어요","자기 전에 책을 읽어요 - 책을 읽은 후에 자요","한국 음식 만든고 나서 공부 할 거예요"
    ,"하는 다음에", "말고","좋을 거","춤추는거기를","지금 몇시 인지","내일 뭐 만들는지","편이라고","못 잤거든요","가는 길이에요","안 읽는 편","세 사람은 전공이 같습니다","내년에 한국에서 일할 거예요","오는 길 이에요"] 
   
   
    for (q = 0; q < questions.length; q++) {
        let currQuestion = questions[q][0].parentElement.parentElement
        for (i = 0; i<4; i++) {
            console.log(questions[q])
            if (questions[q][i].checked === true) {
                // check if answer is correct
                if (questions[q].value === answers[q]) {
                    score++
                    console.log(currQuestion);
                    // currQuestion.style.display.none
                    currQuestion.style.backgroundColor="green";
                    console.log("correct")
                    // make it green
                } else {
                    console.log("wrong")
                    console.log(currQuestion);
                    currQuestion.style.backgroundColor="red";
                }
            } else {
                // They didn't check a button
            }
        }
    } 

    // quiz.style.display= "none";
    console.log("hello");
    document.quiz.question1[0].classList.add("greenColour") 
    // document.getElementById("result").innerHTML = `you got correct ${score} out of 57.`
    console.log(document.quiz.question1[0].parentElement.parentElement);
    result.textContent= `you got correct ${score} out of 60.`;

    // const mom = document.querySelector('#result');
    // const listElem = document.createElement('h5');
    // listElem.innerHTML = '<a href="quizlist.html">go back</a>';
    // mom.appendChild(listElem);
    console.log(result);

}