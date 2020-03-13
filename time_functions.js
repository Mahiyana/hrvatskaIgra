function getTimeQuestionAndAnswer(){
    var questionNumbers = getTimeQuestion();
    var question = questionNumbers[0] + ":" + questionNumbers[1];
    var answer = getTimeAnswer(questionNumbers[0], questionNumbers[1]);
    return [question, answer];
}

function getTimeAnswer(hour, minutes) {
    var answer = "";

    if (hour <= 9) {
        answer += cardinalNumbers["ones"][hour];
    } else if (hour <= 19) {
        answer += cardinalNumbers["teens"][hour];
    } else if (hour <= 99) {
        answer += "dvadeset";
        if (hour % 10 !== 0) {
            answer += " " + cardinalNumbers["ones"][hour % 10];
        }
    } 
    
    if (hour % 10 === 1) {
        answer += " sat ";
    } else if (hour % 10 === 2 || hour % 10 === 3 || hour % 10 === 4) {
        answer += " sata ";
    } else {
        answer += " sati ";
    }

    if (minutes <= 9) {
        answer += cardinalNumbers["ones"][minutes];
    } else if (minutes <= 19) {
        answer += cardinalNumbers["teens"][minutes];
    } else if (minutes <= 99) {
        answer += cardinalNumbers["ties"][Math.floor(minutes/10)*10];
        if (minutes % 10 !== 0) {
            var ones = minutes % 10;
            answer += " " + cardinalNumbers["ones"][ones];
        }
    } 

    if (minutes % 10 === 2 || minutes % 10 === 3 || minutes % 10 === 4) {
        answer += " minute ";
    } else {
        answer += " minuta ";
    }

    return answer;
}

function getTimeQuestion(){
    var hour = Math.floor(Math.random() * 23) + 1;
    var minutes;
    if (Math.floor(Math.random() * 5) === 0) { //chance 1 to 5
        var roundMinutes = [0,15,30,45];
        minutes = roundMinutes[Math.floor(Math.random() * roundMinutes.length)];
    } else {
        minutes = Math.floor(Math.random() * 59) + 1;
    }
    return [hour, minutes];
}
