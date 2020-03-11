var points = 0
var question;

function getQuestion(){
  return Math.floor(Math.random() * 10); 
}

function getAnswer(question){
  var answer;
  if (question <= 9) {
      answer = numbers["ones"][question];
  }
  return answer;
}

function checkAnswer(){
  userAnswer = document.getElementById("userAnswer").value.trim();
  properAnswer = getAnswer(parseInt(question));
  if (userAnswer == properAnswer) {
    var points = parseInt(document.getElementById("points").innerHTML);
    points += 1;
    document.getElementById("points").innerHTML = points;
  } 
  else {
    alert("Prawidłowa odpowiedź to " + properAnswer + "!");
  }
  reloadQuestion();
}

function reloadQuestion(){
  question = getQuestion();
  document.getElementById("question").innerHTML = question;
  document.getElementById("userAnswer").value = "";
}

reloadQuestion();
