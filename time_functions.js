try {
    var data = require('./data');
    var cardinalNumbers = data.cardinalNumbers;
} catch (e) {}



function getTimeQuestionAndAnswer(){
    var questionNumbers = getTimeQuestion();
    var questionString = questionNumbers[1];
    if (questionString <= 9) {
        questionString = "0" + questionString;
    }
    var question = questionNumbers[0] + ":" + questionString;
    var answer = getTimeAnswer(questionNumbers[0], questionNumbers[1]);
    return [question, answer];
}

function getTimeAnswer([hour, minutes]) {
    var answer = "";
    var hourIsATeen = false;
    var minutesAreATeen = false;

    if (hour <= 9) {
        answer += cardinalNumbers["ones"][hour];
    } else if (hour <= 19) {
        hourIsATeen = true;
        answer += cardinalNumbers["teens"][hour];
    } else if (hour <= 99) {
        answer += "dvadeset";
        if (hour % 10 !== 0) {
            answer += " " + cardinalNumbers["ones"][hour % 10];
        }
    } 
    
    if (hour % 10 === 1 && !hourIsATeen) {
        answer += " sat";
    } else if (!hourIsATeen && (hour % 10 === 2 || hour % 10 === 3 || hour % 10 === 4)) {
        answer += " sata";
    } else {
        answer += " sati";
    }

    if (minutes <= 9) {
        if (minutes == 1) {
            answer += " jedna";
        } else if (minutes == 2) {
            answer += " dvije";
        } else {
            answer += " " + cardinalNumbers["ones"][minutes];
        }
    } else if (minutes <= 19) {
        minutesAreATeen = true;
        answer += " " + cardinalNumbers["teens"][minutes];
    } else if (minutes <= 99) {
        answer += " " + cardinalNumbers["ties"][Math.floor(minutes/10)*10];
        if (minutes % 10 !== 0) {
            var ones = minutes % 10;
            if (ones == 1) {
                answer += " jedna";
            } else if (ones == 2) {
                answer += " dvije";
            } else {
                answer += " " + cardinalNumbers["ones"][ones];
            }
        }
    } 

    if (!minutesAreATeen && (minutes % 10 === 2 || minutes % 10 === 3 || minutes % 10 === 4)) {
        answer += " minute";
    } else {
        answer += " minuta";
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

try {
    module.exports.getTimeAnswer = getTimeAnswer;
} catch (e) {}
