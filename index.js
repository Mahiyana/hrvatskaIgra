var points = 0
var menuMode = 0; 

var question;
var properAnswer;

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
    menuMode = newMode;
    reloadQuestion();
}

function writeLetter(letter){ //TODO change to writing where the cursor is instead of appending at the end
    currentAnswer = document.getElementById("userAnswer").value;
    document.getElementById("userAnswer").value = currentAnswer + letter;
    document.getElementById("userAnswer").focus();
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
    userAnswer = document.getElementById("userAnswer").value.trim();
    if (userAnswer == properAnswer) {
        var points = parseInt(document.getElementById("points").innerHTML);
        points += 1;
        document.getElementById("points").innerHTML = points;
    } 
    else {
        alert("Dobar odgovor je: " + properAnswer + "!");
    }
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
    document.getElementById("userAnswer").value = "";
    document.getElementById("userAnswer").focus();
}

function initialize(){
    document.getElementById("userAnswer").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            checkAnswer();
        }
    });
    reloadQuestion();
}

initialize();
