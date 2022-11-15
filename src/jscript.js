// Hamburger Menu Listner
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

// newTask Listner
const taskPlusses = document.querySelectorAll(".addTask.plusSign");

for (let i = 0; i < taskPlusses.length; i++) {
  taskPlusses[i].addEventListener("mouseover", function () {
    setPlusCol(this.id, "black");
  });
}

for (let i = 0; i < taskPlusses.length; i++) {
  taskPlusses[i].addEventListener("mouseout", function () {
    setPlusCol(this.id, "cornflowerblue");
  });
}

for (let i = 0; i < taskPlusses.length; i++) {
  taskPlusses[i].addEventListener("click", function () {
    addItem();
  });
}

// newSubTask Listner
const plusses = document.querySelectorAll(".addSubTask");

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

function addItem(taskName = prompt("Please enter your ToDo", "My ToDo")) {
  let taskCounter = document.querySelectorAll(".task.cardGrid").length + 1;
  console.log("counter = " + taskCounter);
  let taskID = "task" + taskCounter;
  console.log(taskID);

  const newTaskNode = document.createElement("div");
  newTaskNode.className = "gridContainer cardGrid task";
  newTaskNode.id = taskID;
  console.log(newTaskNode);
  document.getElementById("bodyGrid").appendChild(newTaskNode);

  const newCheckBoxGrid = document.createElement("div");
  newCheckBoxGrid.className = "gridContainer checkBoxGrid";
  newCheckBoxGrid.id = taskID + "checkBoxGrid";
  document.getElementById(taskID).appendChild(newCheckBoxGrid);

  const newCheckBox = document.createElement("INPUT");
  newCheckBox.setAttribute("type", "CheckBox");
  newCheckBox.setAttribute("name", "taskCheckBox");
  newCheckBox.id = taskID + "checkbox";
  document.getElementById(taskID + "checkBoxGrid").appendChild(newCheckBox);

  const newTaskZone = document.createElement("div");
  newTaskZone.className = "gridContainer taskZone";
  newTaskZone.id = taskID + "TaskZone";
  newTaskZone.innerHTML = "<h3>" + taskName;
  document.getElementById(taskID).appendChild(newTaskZone);

  const newPlusSignBuffer = document.createElement("div");
  newPlusSignBuffer.className = "gridContainer plusSignBuffer";
  newPlusSignBuffer.id = taskID + "plusSignBuffer";
  document.getElementById(taskID).appendChild(newPlusSignBuffer);

  const newPlusSign = document.createElement("div");
  newPlusSign.className = "gridContainer addTask plusSign";
  newPlusSign.id = taskID + "plusSign";
  document.getElementById(taskID + "plusSignBuffer").appendChild(newPlusSign);

  const newVertical = document.createElement("div");
  newVertical.className = "addSubTask plusLine vertical";
  newVertical.id = taskID + "plusVertical";
  document.getElementById(taskID + "plusSign").appendChild(newVertical);

  const newHorizontal = document.createElement("div");
  newHorizontal.className = "addSubTask plusLine horizontal";
  newHorizontal.id = taskID + "plusHorizontal";
  document.getElementById(taskID + "plusSign").appendChild(newHorizontal);

  const newHamburgerMenuBuffer = document.createElement("div");
  newHamburgerMenuBuffer.className = "gridContainer hamburgerMenuBuffer";
  newHamburgerMenuBuffer.id = taskID + "HamburgerMenuBuffer";
  document.getElementById(taskID).appendChild(newHamburgerMenuBuffer);

  const newHamburgerMenu = document.createElement("div");
  newHamburgerMenu.className = "gridContainer hamburgerMenu";
  newHamburgerMenu.id = taskID + "HamburgerMenu";
  document.getElementById(taskID + "HamburgerMenuBuffer").appendChild(newHamburgerMenu);

  const newHamStripe1 = document.createElement("div");
  newHamStripe1.className = "hamburgerStripe hamStripe1";
  newHamStripe1.id = taskID + "HamStripe1";
  document.getElementById(taskID + "HamburgerMenu").appendChild(newHamStripe1);

  const newHamStripe2 = document.createElement("div");
  newHamStripe2.className = "hamburgerStripe hamStripe2";
  newHamStripe2.id = taskID + "HamStripe2";
  document.getElementById(taskID + "HamburgerMenu").appendChild(newHamStripe2);

  const newHamStripe3 = document.createElement("div");
  newHamStripe3.className = "hamburgerStripe hamStripe3";
  newHamStripe3.id = taskID + "HamStripe3";
  document.getElementById(taskID + "HamburgerMenu").appendChild(newHamStripe3);
}