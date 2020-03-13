
var data = require('./data');
var cardinalNumbers = data.cardinalNumbers;

var testData = require('./test_data');
var cardinalNumbersTestCases = testData.cardinalNumbersTestCases;

var cardinal_number_functions = require('./cardinal_number_functions');

error = false;
for (const [question, answer] of Object.entries(cardinalNumbersTestCases)) {
  if(cardinal_number_functions.getCardinalNumberAnswer(question) != answer) {
      console.error(question, answer, "!=", cardinal_number_functions.getCardinalNumberAnswer(question));
      error = true;
  }
}

if(!error){
    console.log("No errors. Good job!");
}

