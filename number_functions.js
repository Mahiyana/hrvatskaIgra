function getNumberLessThan999(question, beforeThousand = false){
    var answer;
    if (question <= 9) {
        if (beforeThousand && (question === 1 || question === 2)){
            if (question === 1) { answer = ""}
            if (question === 2) { answer = "dvije"}
        } else {
            answer = numbers["ones"][question];
        }
    } else if (question <= 19) {
        answer = numbers["teens"][question];
    } else if (question <= 99) {
        answer = numbers["ties"][Math.floor(question/10)*10];
        if (question % 10 !== 0) {
            var ones = question % 10;
            if (beforeThousand && (ones === 1 || ones === 2)){
                if (ones === 1) { answer += " jedna"}
                if (ones === 2) { answer += " dvije"}
            } else {
                answer += " " + numbers["ones"][ones];
            } 
        }
    } else {
        answer = numbers["hundreds"][Math.floor(question/100)*100];
        var ties = Math.floor((question - Math.floor(question/100)*100)/10)*10
        if (ties !== 0 && question % 100 !== 0 && ties !== 10) {
            answer += " " + numbers["ties"][ties];
        } else if (ties !== 0 && question % 100 !== 0) {
           answer += " " + numbers["teens"][question % 100];
        }
        if (question % 10 !== 0 && ties !== 10) {
            var ones = question - Math.floor(question/10)*10;
            if (beforeThousand && (ones === 1 || ones === 2)){
                if (ones === 1) { answer += " jedna"}
                if (ones === 2) { answer += " dvije"}
            } else {
                answer += " " + numbers["ones"][ones];
            } 
        }
    }
    return answer;
}

function getAnswer(question){
    var answer;
    if (question <= 999) {
        answer = getNumberLessThan999(question);
    } else {
        var firstPart = Math.floor(question/1000);
        var secondPart = question % 1000;
        answer = getNumberLessThan999(firstPart, true);
        lastDigit = firstPart % 10 // from first part
        middleDigit = firstPart - (firstPart-(firstPart%100)) - firstPart%10; // from first part
        if(middleDigit === 10 || lastDigit === 5 || lastDigit === 6 || lastDigit === 7 || lastDigit === 8 || lastDigit === 9 || lastDigit === 0){
            answer += " tisuća";
        } else if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) {
            answer += " tisuće";
        } else if (secondPart != 0) {
            answer += " tisuću";
        } else {
            answer += " tisuća";
        }
        if (secondPart !=0) {
            answer += " " + getNumberLessThan999(secondPart);
        }
    }
    return answer.trim();
}

try {
    module.exports.getNumberLessThan999 = getNumberLessThan999;
    module.exports.getAnswer = getAnswer;
} catch (e) {}
