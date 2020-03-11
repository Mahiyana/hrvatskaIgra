var points = 0
var question;

document.getElementById("userAnswer").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        checkAnswer();
    }
}); 

function getQuestion(){
    return Math.floor(Math.random() * 1000); 
}

function getAnswer(question){
    var answer;
    if (question <= 9) {
        answer = numbers["ones"][question];
    } else if (question <= 19) {
        answer = numbers["teens"][question];
    } else if (question <= 99) {
        answer = numbers["ties"][Math.floor(question/10)*10];
        if (question % 10 !== 0) {
            answer += " " + numbers["ones"][question - Math.floor(question/10)*10];
        }
    } else if (question <= 999) {
        answer = numbers["hundrets"][Math.floor(question/100)*100];
        var ties = Math.floor((question - Math.floor(question/100)*100)/10)*10
        if (ties !== 0 && question % 100 !== 0) {
            answer += " " + numbers["ties"][ties];
        }
        if (question % 10 !== 0) {
            answer += " " + numbers["ones"][question - Math.floor(question/10)*10];
        }
    }
    return answer;
}

function checkAnswer(){
    userAnswer = document.getElementById("userAnswer").value.trim();
    properAnswer = getAnswer(parseInt(question));
    if (userAnswer == properAnswer) {
        var points = parseInt(document.getElementById("points").innerHTML);
        points += 1;
        document.getElementById("points").innerHTML = points;
    } 
    else {
        alert("Prawidłowa odpowiedź to " + properAnswer + "!");
    }
    reloadQuestion();
}

function reloadQuestion(){
    question = getQuestion();
    document.getElementById("question").innerHTML = question;
    document.getElementById("userAnswer").value = "";
}

reloadQuestion();
