try {
    var data = require('./data');
    var cardinalNumbers = data.cardinalNumbers;
    var masculineNouns = data.masculineNouns;
    var feminineNouns = data.feminineNouns;
    var neuterNouns = data.neuterNouns;
    var nounsWithCases = data.nounsWithCases;
    var genderArray = data.genderArray;
} catch (e) {}

function getCardinalNumberWithNounQuestionAndAnswer(){
    var questionData = getCardinalNumberWithNounQuestion();
    var question = questionData[0] + " ☓" + questionData[1];
    var answer = getCardinalNumberWithNounAnswer(questionData[0], questionData[1]);
    return [question, answer];
}

function getCardinalNumberWithNounAnswer([noun, number]){
    var gender = checkGenderCNWN(noun);    
    var onesArray = ["jedan", "jedna", "jedno"];
    var twosArray = ["dva", "dvije", "dva"];
    var answer;
    var isATeen = false;

    if (number <= 9) {
        answer = cardinalNumbers["ones"][number];
        if (number == 1) {
            answer = onesArray[gender];
        } else if (number == 2) {
            answer = twosArray[gender];
        } else {
            answer =  cardinalNumbers["ones"][number];
        }

    } else if (number <= 19) {
        answer = cardinalNumbers["teens"][number];
        isATeen = true;
    } else {
        answer = cardinalNumbers["ties"][Math.floor(number/10)*10];
        if (number % 10 !== 0) {
            var ones = number % 10;
            if (ones == 1) {
                answer += " " + onesArray[gender];
            } else if (ones == 2) {
                answer += " " + twosArray[gender];
            } else {
                answer += " " + cardinalNumbers["ones"][ones];
            }
        }
    }
    
    lastDigit = number % 10;
    if (!isATeen && (lastDigit === 2 || lastDigit === 3 || lastDigit === 4)) {
        answer += " " + nounsWithCases[genderArray[gender]][noun][0];
    } else if (!isATeen && lastDigit == 1) {
       answer += " " + noun;
    } else {
       answer += " " + nounsWithCases[genderArray[gender]][noun][1];
    }
    
    return answer;
}


function getCardinalNumberWithNounQuestion(){
    var gender = genderArray[Math.floor(Math.random() * 3)];
    var nounsArray = Object.keys(nounsWithCases[gender]);
    var noun = nounsArray[Math.floor(Math.random() * nounsArray.length)];
    var number = Math.floor(Math.random() * 99) + 1;
    return [noun, number]
}

function checkGenderCNWN(noun){
   if (masculineNouns.includes(noun)) { 
       return 0; 
   } else if (feminineNouns.includes(noun)){
       return 1;
   } else {
       return 2;
   }
}

try {
    module.exports.getCardinalNumberWithNounAnswer = getCardinalNumberWithNounAnswer;
} catch (e) {}
