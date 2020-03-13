function getOrdinalNumberQuestionAndAnswer(){
    var questionData = getOrdinalNumberQuestion();
    var question = questionData[0] + ". " + questionData[1];
    var answer = getOrdinalNumberAnswer(questionData[0], questionData[1]);
    return [question, answer]
}

function getOrdinalNumberAnswer(noun, number){
    var answer;
    var gender = checkGenderON(noun);
    
    if (number <= 99) {
        if (number <= 9) {
            answer = ordinalNumbers["ones"][number];
        } else if (number <= 19) {
            answer = cardinalNumbers["teens"][number];
        } else {
            answer = cardinalNumbers["ties"][Math.floor(number/10)*10];
            if (number % 10 !== 0) {
                answer += " " + ordinalNumbers["ones"][number % 10];
            }
        } 
    } else if (number < 1000) {
        answer = ordinalNumbers["hundreds"][question];
    } else {
        answer = ordinalNumbers["thousands"][question];
    }    

    if (gender == 2  && number % 10 === 3 && number != 13) {
        answer += "e ";
    } else {
        answer += numberMorpheme[gender] ;
    }

    answer += " " + noun;
    return answer;
}

function getOrdinalNumberQuestion(){
    var gender = genderArray[Math.floor(Math.random() * 3)];
    var noun = ordinableNouns[gender][Math.floor(Math.random() * ordinableNouns[gender].length)];
    var number;
  
    // range: 0-(1-99), 1-hundreds, 2-thousands
    var range = 0;
    if (Math.floor(Math.random() * 10) === 0){ //chance 1 to 10
        var range = Math.floor(Math.random() * 2) + 1;
    }
    switch(range){
        case 0:
            number = Math.floor(Math.random() * 99) + 1;
            break;
        case 1:
            number = (Math.floor(Math.random() * 9) + 1) * 100;
            break;
        case 2:
            number = (Math.floor(Math.random() * 10) + 1) * 1000;
    }
    return [noun, number]
}

function checkGenderON(noun){
   if (ordinableNouns["masculine"].includes(noun)) { 
       return 0; 
   } else if (ordinableNouns["feminine"].includes(noun)){
       return 1;
   } else {
       return 2;
   }
}


