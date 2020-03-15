try {
    var data = require('./data');
    var cardinalNumbers = data.cardinalNumbers;
    var ordinalNumbers = data.ordinalNumbers;
    var monthsInGenitiv = data.monthsInGenitiv;
} catch (e) {}



function getDateQuestionAndAnswer(){
    var dateQuestion = getDateQuestion();
    var day = dateQuestion.getDate() + 1;
    var month = dateQuestion.getMonth();
    var year = dateQuestion.getFullYear();
    var question = day + "." + month + "." + year;
    var answer = getDateAnswer(day, month, year);
    return [question, answer];
}

function getDateAnswer([day, month, year]){
    var answer;
    if (day <= 9) {
        answer = ordinalNumbers["ones"][day];
    } else if (day <= 19) {
        answer = cardinalNumbers["teens"][day];
    } else {
        answer = cardinalNumbers["ties"][Math.floor(day/10)*10];
        if (day % 10 !== 0) {
            var ones = day % 10;
            answer += " " + ordinalNumbers["ones"][ones];
        }
    }
    answer += "i " + monthsInGenitiv[month - 1] + " ";
   
    if (year === 1000 || year === 2000) {
        answer += "tisućite"
    } else {
        if (year < 2000) { 
            answer += "tisuću ";
        } else {
            answer += "dvije tisuća "
        }
        year = year % 1000
        if (year > 99){
            answer += cardinalNumbers["hundreds"][Math.floor(year/100)*100];
        }
        var ties = Math.floor((year - Math.floor(year/100)*100)/10)*10
        if (ties !== 0 && year % 100 !== 0 && ties !== 10) {
            answer += " " + cardinalNumbers["ties"][ties];
        } else if (ties !== 0 && year % 100 !== 0) {
           answer += " " + cardinalNumbers["teens"][year % 100];
        }
        if (year % 10 !== 0 && ties !== 10) {
            var ones = year - Math.floor(year/10)*10;
            answer += " " + ordinalNumbers["ones"][ones];
        }
        answer += "e";
    }
    return answer;
}

function getDateQuestion(){
    var start = new Date(1000, 0, 1);
    var end = new Date(2500, 11, 31);
    var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date;
}

try {
    module.exports.getDateAnswer = getDateAnswer;
} catch (e) {}
