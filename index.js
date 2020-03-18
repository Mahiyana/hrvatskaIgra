var points = 0
var menuMode = 0; 

var question;
var properAnswer;

var answerCardVisible = false;

// modes:
// 0 - cardinal numbers
// 1 - ordinal numbers
// 2 - cardinal numbers with noun
// 3 - date
// 4 - time
// 5 - mix

var questionSentence = {
    0: "Kako se kaže ovaj broj?",
    1: "Koji je ovaj stvar?",
    2: "Koliko je ovaj stvari?",
    3: "Koji je datum?",
    4: "Koliko je sati?",
}

function changeMode(newMode){
    document.getElementById("menu-button-" + menuMode).classList.remove("active-menu-button");
    document.getElementById("menu-button-" + menuMode).classList.add("inactive-menu-button");
    document.getElementById("menu-button-" + newMode).classList.remove("inactive-menu-button");
    document.getElementById("menu-button-" + newMode).classList.add("active-menu-button");
    menuMode = newMode;
    reloadQuestion();
}

function writeLetter(letter){ //TODO change to writing where the cursor is instead of appending at the end
    currentAnswer = document.getElementById("user-answer").value;
    document.getElementById("user-answer").value = currentAnswer + letter;
    document.getElementById("user-answer").focus();
}

function getQuestionAndAnswer(mode){
    switch(mode) {
        case 0:
            return getCardinalNumberQuestionAndAnswer();
        case 1:
            return getOrdinalNumberQuestionAndAnswer();
        case 2:
            return getCardinalNumberWithNounQuestionAndAnswer();
        case 3:
            return getDateQuestionAndAnswer();
        case 4:
            return getTimeQuestionAndAnswer();
    }
}


function checkAnswer(){
   console.log("checking");
    userAnswer = document.getElementById("user-answer").value.trim();
    if (userAnswer == properAnswer) {
        var points = parseInt(document.getElementById("points").innerHTML);
        points += 1;
        document.getElementById("points").innerHTML = points;
        reloadQuestion();
    } 
    else {
        showAnswerCard(userAnswer);
    }
}

function showAnswerCard(userAnswer) {
    document.getElementById("check-button").blur();
    document.getElementById("answer-card").style["visibility"]  = "visible";
    document.getElementById("question-card").style["visibility"]  = "hidden";
    document.getElementById("user-answer-card").innerHTML = userAnswer;
    document.getElementById("proper-answer-card").innerHTML = properAnswer;
    answerCardVisible = true;
}

function closeAnswerCard() {
    document.getElementById("answer-card").style["visibility"]  = "hidden";
    document.getElementById("question-card").style["visibility"]  = "visible";
    answerCardVisible = false;
    reloadQuestion();
}

function reloadQuestion(){
    modeForQuestions = menuMode;
    if (modeForQuestions === 5) { modeForQuestions = Math.floor(Math.random() * 5) } 
    var qAndA = getQuestionAndAnswer(modeForQuestions);
    question = qAndA[0];
    properAnswer = qAndA[1];
    
    document.getElementById("question-sentence").innerHTML = questionSentence[modeForQuestions];
    document.getElementById("question").innerHTML = question;
    document.getElementById("user-answer").value = "";
    document.getElementById("user-answer").focus();
}

function initialize(){
    document.addEventListener("keypress", function(event) {
        if (event.keyCode == 13) {
            if (!answerCardVisible) {
                checkAnswer();
            } else {
                closeAnswerCard();
            }
        }
    })
    reloadQuestion();
}

initialize();
