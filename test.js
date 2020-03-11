var functions = require('./number_functions');
var numbers = require('./numbers');
numbers = numbers["numbers"]

testCases = {
    1: "jedan",
    11: "jedanaest",
    111: "sto jedanaest",
    1111: "tisuću sto jedanaest",
    11111: "jedanaest tisuća sto jedanaest",
    111111: "sto jedanaest tisuća sto jedanaest",
}

error = false;
for (const [key, value] of Object.entries(testCases)) {
  if(functions.getAnswer(key) != value) {
      console.error(key, value, "!=", functions.getAnswer(key));
      error = true;
  }
}

if(!error){
    console.log("No errors. Good job!");
}

