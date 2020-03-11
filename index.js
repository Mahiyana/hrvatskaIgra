var question = "0"
var answer = "nula";
var points = 0
document.getElementById("question").innerHTML = question;

function checkAnswer(){
  userAnswer = document.getElementById("userAnswer").value;
  if (userAnswer.trim() == answer) {
    var points = parseInt(document.getElementById("points").innerHTML);
    points += 1;
    document.getElementById("points").innerHTML = points;
  } 
  else {
    alert("Prawidłowa odpowiedź to " + answer + "!");
  }
  document.getElementById("userAnswer").value = "";
}
