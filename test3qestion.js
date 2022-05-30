let questions = [
    {

        numb: 1,
        question: "How is the weather like?",
        answer:  "The weather is good.",
        options: [
            "The weather is not good.",
            "The weather is good.",
            "The weather is tedf good.",
            "The weather is  dfs good."
        ]
    },
    {

        numb: 2,
        question: "How is the aodf like?",
        answer:  "The weather is good.",
        options: [
            "The weather is not good.",
            "The weather is good.",
            "The weather is tedf good.",
            "The weather is  dfs good."
        ]
    },
    {

        numb: 3,
        question: "How is the dfsf like?",
        answer:  "The weather is good.",
        options: [
            "The weather is not good.",
            "The weather is good.",
            "The weather is tedf good.",
            "The weather is  dfs good."
        ]
    },
    {

        numb: 4,
        question: "Howdfsage like?",
        answer:  "The weather is good.",
        options: [
            "The weather is not good.",
            "The weather is good.",
            "The weather is tedf good.",
            "The weather is  dfs good."
        ]
    },
    {

        numb: 5,
        question: "How is the food like?",
        answer:  "The weather is good.",
        options: [
            "The weather is not good.",
            "The weather is good.",
            "The weather is tedf good.",
            "The weather is  dfs good."
        ]
    },
];


let que_count = 0;
let que_numb = 1;
let counter;
let timeValue = 40;
let widthValue = 0;


function showQustions(index) {
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>' + questions[index].numb + "." + questions[index].question +'</span>';
    let option_tag = '<div class="option">' +  questions[index].options[0] +'<span></span></div>'
                     + '<div class="option">' +  questions[index].options[1] +'<span></span></div>'
                     + '<div class="option">' +  questions[index].options[2] +'<span></span></div>'
                     + '<div class="option">' +  questions[index].options[3] +'<span></span></div>'; 
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");
    for(let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', "optionSelected(this)");

    }
   
}




let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions =  option_list.children.length;
    if (userAns == correctAns) {
        answer.classList.add("correct");
        console.log("Answer is Correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add("incorrect");
        console.log("Answer is Wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);
      
        
       
       

        for(let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns){
             option_list.children[i].setAttribute('class', "option correct");
             option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            
            }
           
        }

    }

    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    nextBtn.style.display= "block";
} 


function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0) {
            clearInterval(counter);
            timeCount.textContent = "00";
      

        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
         time += 1;
         timeLine.style.width = time + "px";
        if(time > 549) {
           clearInterval(counterLine);
        }
    }
}






const nextBtn = quizBox.querySelector('.next_btn');

nextBtn.onclick = function(){
   if(que_count < questions.length -1){
    que_count++;
    showQustions(que_count);
    que_numb++;
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    nextBtn.style.display= "none";
   } else {
       console.log('questions completed');
   }
   
}

function queCounter(index) {
    const bottemQuesCounter = quizBox.querySelector(".total_que");
    let totalQueCounterTag = '<span><p>'+ index + '</p>of<p>' + questions.length + '</p>Questions</span>'
    bottemQuesCounter.innerHTML = totalQueCounterTag;
}





















