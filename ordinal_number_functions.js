function getOrdinalNumberQuestionAndAnswer(){ //TODO divide into two functions to make it testable (and more usable)
    var question;
    var answer;

    // 0-masculine, 1-feminine, 2-neuter
    var gender = Math.floor(Math.random() * 3); 
    // 0-(1-99), 1-hundreds, 2-thousands
   
    var range = 0;
    if (Math.floor(Math.random() * 10) === 0){ //chance 1 to 10
        var range = Math.floor(Math.random() * 2) + 1;
    }
    
    switch(range){
        case 0:
            question = Math.floor(Math.random() * 99) + 1;
            if (question <= 9) {
                answer = ordinalNumbers["ones"][question];
            } else if (question <= 19) {
                answer = cardinalNumbers["teens"][question];
            } else if (question <= 99) {
                answer = cardinalNumbers["ties"][Math.floor(question/10)*10];
                if (question % 10 !== 0) {
                    var ones = question % 10;
                    answer += " " + ordinalNumbers["ones"][ones];
                }
            } 
            break;
        case 1:
            question = (Math.floor(Math.random() * 9) + 1) * 100;
            answer = ordinalNumbers["hundreds"][question];
            break;
        case 2:
            question = (Math.floor(Math.random() * 10) + 1) * 1000;
            answer = ordinalNumbers["thousands"][question];
    }

    var ordinableNoun;
    switch(gender){
        case 0:
            answer += "i ";
            ordinableNoun = ordinableNouns["masculine"][Math.floor(Math.random() * ordinableNouns["masculine"].length)];
            break;
        case 1:
            answer += "a ";
            ordinableNoun = ordinableNouns["feminine"][Math.floor(Math.random() * ordinableNouns["feminine"].length)];
            break;
        case 2:
            if (question % 10 === 3) {
                answer += "e ";
            } else {
                answer += "o ";
            }    
            ordinableNoun = ordinableNouns["neuter"][Math.floor(Math.random() * ordinableNouns["neuter"].length)];
    }
    question += ". " + ordinableNoun;
    answer += ordinableNoun;


    //return ["3. kat", "treći kat"];
    return [question, answer];
}


