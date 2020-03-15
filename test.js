var testData = require('./test_data');
var cardinal_number_functions = require('./cardinal_number_functions');
var ordinal_number_functions = require('./ordinal_number_functions');
var cardinal_number_with_noun_functions = require('./cardinal_number_with_noun_functions');
var date_functions = require('./date_functions');
var time_functions = require('./time_functions');

var error = false;

function testFunctions(testData, testedFunction) {
    for (const [question, answer] of testData) {
        if(testedFunction(question) != answer) {
            console.error(question, answer, "!=", testedFunction(question));
            error = true;
        }
    }
}

testFunctions(testData.cardinalNumbersTestCases, cardinal_number_functions.getCardinalNumberAnswer);
testFunctions(testData.ordinalNumbersTestCases, ordinal_number_functions.getOrdinalNumberAnswer);
testFunctions(testData.cardinalNumbersWithNounTestCases, cardinal_number_with_noun_functions.getCardinalNumberWithNounAnswer);
testFunctions(testData.dateTestCases, date_functions.getDateAnswer);
testFunctions(testData.timeTestCases, time_functions.getTimeAnswer);

if(!error){
    console.log("No errors. Good job!");
}

