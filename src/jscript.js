function setHamCol(hamburgerID, color) {
  document.getElementById(hamburgerID + ".1").style.backgroundColor = color;
  document.getElementById(hamburgerID + ".2").style.backgroundColor = color;
  document.getElementById(hamburgerID + ".3").style.backgroundColor = color;
}

function setPlusCol(plusID, color) {
  document.getElementById(plusID + "Vertical").style.backgroundColor = color;
  document.getElementById(plusID + "Horizontal").style.backgroundColor = color;
}

function hamClick() {
  console.log("click");
}
const burgers = document.querySelectorAll(".hamburgerMenu");
for (let i = 0; i < burgers.length; i++) {
  burgers[i].addEventListener("mouseover", function () {
    setHamCol(this.id, "red");
  });
}

for (let i = 0; i < burgers.length; i++) {
  burgers[i].addEventListener("mouseout", function () {
    setHamCol(this.id, "blue");
  });
}

for (let i = 0; i < burgers.length; i++) {
  burgers[i].addEventListener("click", function () {
    hamClick();
  });
}

const plusses = document.querySelectorAll(".plusSign");

for (let i = 0; i < plusses.length; i++) {
  plusses[i].addEventListener("mouseover", function () {
    setPlusCol(this.id, "green");
  });
}

for (let i = 0; i < plusses.length; i++) {
  plusses[i].addEventListener("mouseout", function () {
    setPlusCol(this.id, "orangered");
  });
}