function getCardinalNumberWithNounQuestionAndAnswer(){ //TODO divide into two functions to make it testable (and more usable)
    var nounSet = nounsWithCases[Math.floor(Math.random() * nounsWithCases.length)];
    var questionNumber = Math.floor(Math.random() * 99) + 1;
    var question = nounSet[0] + " ☓" + questionNumber;
    var answer;
    var isATeen = false;

    if (questionNumber <= 9) {
        answer = cardinalNumbers["ones"][questionNumber];
    } else if (questionNumber <= 19) {
        answer = cardinalNumbers["teens"][questionNumber];
        isATeen = true;
    } else {
        answer = cardinalNumbers["ties"][Math.floor(questionNumber/10)*10];
        if (questionNumber % 10 !== 0) {
            var ones = questionNumber % 10;
            answer += " " + cardinalNumbers["ones"][ones];
        }
    }
    
    lastDigit = questionNumber % 10;
    if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) {
        answer += " " + nounSet[1];
    } else if (!isATeen && lastDigit == 1) {
       answer += " " + nounSet[0];
    } else {
       answer += " " + nounSet[2];
    }

    return [question, answer];
}
