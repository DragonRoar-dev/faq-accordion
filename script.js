function buttonOne() {
  var x = document.getElementById("answerOne");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  if (x.style.display === "block") {
    document.querySelector(".question-one img").src = "/assets/images/icon-minus.svg";
  } else {
    document.querySelector(".question-one img").src = "/assets/images/icon-plus.svg";
  }

}

function buttonTwo() {
  var x = document.getElementById("answerTwo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  if (x.style.display === "block") {
    document.querySelector(".question-two img").src = "/assets/images/icon-minus.svg";
  } else {
    document.querySelector(".question-two img").src = "/assets/images/icon-plus.svg";
  }
}

function buttonThree() {
  var x = document.getElementById("answerThree");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  if (x.style.display === "block") {
    document.querySelector(".question-three img").src = "/assets/images/icon-minus.svg";
  } else {
    document.querySelector(".question-three img").src = "/assets/images/icon-plus.svg";
  }
}

function buttonFour() {
  var x = document.getElementById("answerFour");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  if (x.style.display === "block") {
    document.querySelector(".question-four img").src = "/assets/images/icon-minus.svg";
  } else {
    document.querySelector(".question-four img").src = "/assets/images/icon-plus.svg";
  }
}
