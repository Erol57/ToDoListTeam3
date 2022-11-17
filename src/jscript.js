function addMainTaskListnerGroup() {
  const taskPlusses = document.querySelectorAll(".addTask.plusSign");
  for (let i = 0; i < taskPlusses.length; i++) {
    taskPlusses[i].addEventListener("mouseover", function () {
      setPlusColor(this.id, "darkslateblue");
    });
  }
  for (let i = 0; i < taskPlusses.length; i++) {
    taskPlusses[i].addEventListener("mouseout", function () {
      setPlusColor(this.id, "cornflowerblue");
    });
  }
  for (let i = 0; i < taskPlusses.length; i++) {
    taskPlusses[i].addEventListener("click", function () {
      addMainTask();
    });
  }
}

function newSubTaskListnerGroup() {
  // newSubTask Listner
  const plusses = document.getElementsByClassName("addSubTask plusSign");
  for (let i = 0; i < plusses.length; i++) {
    plusses[i].addEventListener("mouseover", function () {
      // setPlusCol(this.id, "green");
      const hoverBackgroundColor = "green";
      plusses[i].children[0].style.backgroundColor = hoverBackgroundColor;
      plusses[i].children[1].style.backgroundColor = hoverBackgroundColor;
    });
  }
  for (let i = 0; i < plusses.length; i++) {
    plusses[i].addEventListener("mouseout", function () {
      // setPlusCol(this.id, "orangered");
      const hoverOutBackgroundColor = "orangered";
      plusses[i].children[0].style.backgroundColor = hoverOutBackgroundColor;
      plusses[i].children[1].style.backgroundColor = hoverOutBackgroundColor;
    });
  }
  for (let i = 0; i < plusses.length; i++) {
    plusses[i].addEventListener("click", function () {
      const clickedPlusSignID = this.id;
      addNewSubTask(clickedPlusSignID);
    });
  }
}

function hamburgerListnerGroup() {
  const burgers = document.getElementsByClassName("hamburgerMenu");
  for (let i = 0; i < burgers.length; i++) {
    burgers[i].addEventListener("mouseover", function () {
      const hoverBackgroundColor = "red";
      burgers[i].children[0].style.backgroundColor = hoverBackgroundColor;
      burgers[i].children[1].style.backgroundColor = hoverBackgroundColor;
      burgers[i].children[2].style.backgroundColor = hoverBackgroundColor;
    });
  }
  for (let i = 0; i < burgers.length; i++) {
    burgers[i].addEventListener("mouseout", function () {
      const hoverOutBackgroundColor = "blue";
      burgers[i].children[0].style.backgroundColor = hoverOutBackgroundColor;
      burgers[i].children[1].style.backgroundColor = hoverOutBackgroundColor;
      burgers[i].children[2].style.backgroundColor = hoverOutBackgroundColor;
    });
  }
  for (let i = 0; i < burgers.length; i++) {
    burgers[i].addEventListener("click", function () {
      hamClick(burgers);
    });
  }
}

addMainTaskListnerGroup(); //trigger event listeners
newSubTaskListnerGroup();
hamburgerListnerGroup();

function addMainTask(taskName = prompt("Please enter your ToDo", "My ToDo")) {
  const taskCounter = document.querySelectorAll(".task.cardGrid").length + 1;
  const taskID = "task" + taskCounter;
  const newSubTaskNode = document.createElement("section");
  newSubTaskNode.className = "gridContainer cardGrid task";
  newSubTaskNode.id = taskID;
  document.getElementById("bodyGrid").appendChild(newSubTaskNode);

  const newSubCheckBoxGrid = document.createElement("div");
  newSubCheckBoxGrid.className = "gridContainer checkBoxGrid";
  newSubCheckBoxGrid.id = taskID + "checkBoxGrid";
  document.getElementById(taskID).appendChild(newSubCheckBoxGrid);

  const newSubCheckBox = document.createElement("INPUT");
  newSubCheckBox.setAttribute("type", "CheckBox");
  newSubCheckBox.setAttribute("name", "taskCheckBox");
  newSubCheckBox.id = taskID + "checkbox";
  document.getElementById(taskID + "checkBoxGrid").appendChild(newSubCheckBox);

  const newSubTaskZone = document.createElement("div");
  newSubTaskZone.className = "gridContainer taskZone";
  newSubTaskZone.id = taskID + "TaskZone";
  newSubTaskZone.innerHTML = "<h3>" + taskName;
  document.getElementById(taskID).appendChild(newSubTaskZone);

  const newPlusSignBuffer = document.createElement("div");
  newPlusSignBuffer.className = "gridContainer plusSignBuffer";
  newPlusSignBuffer.id = taskID + "plusSignBuffer";
  document.getElementById(taskID).appendChild(newPlusSignBuffer);

  const newPlusSign = document.createElement("div");
  newPlusSign.className = "gridContainer addSubTask plusSign";
  newPlusSign.id = taskID + "addSubTask";
  document.getElementById(taskID + "plusSignBuffer").appendChild(newPlusSign);

  const newVertical = document.createElement("div");
  newVertical.className = "addSubTask plusLine vertical";
  newVertical.id = taskID + "plusVertical";
  document.getElementById(taskID + "addSubTask").appendChild(newVertical);

  const newHorizontal = document.createElement("div");
  newHorizontal.className = "addSubTask plusLine horizontal";
  newHorizontal.id = taskID + "plusHorizontal";
  document.getElementById(taskID + "addSubTask").appendChild(newHorizontal);

  const newSubHamburgerMenuBuffer = document.createElement("div");
  newSubHamburgerMenuBuffer.className = "gridContainer hamburgerMenuBuffer";
  newSubHamburgerMenuBuffer.id = taskID + "HamburgerMenuBuffer";
  document.getElementById(taskID).appendChild(newSubHamburgerMenuBuffer);

  const newSubHamburgerMenu = document.createElement("div");
  newSubHamburgerMenu.className = "gridContainer hamburgerMenu";
  newSubHamburgerMenu.id = taskID + "HamburgerMenu";
  document.getElementById(taskID + "HamburgerMenuBuffer").appendChild(newSubHamburgerMenu);

  const newHamStripe1 = document.createElement("div");
  newHamStripe1.className = "hamburgerStripe hamburgerStripe1";
  newHamStripe1.id = taskID + "hamburgerStripe1";
  document.getElementById(taskID + "HamburgerMenu").appendChild(newHamStripe1);

  const newHamStripe2 = document.createElement("div");
  newHamStripe2.className = "hamburgerStripe hamburgerStripe2";
  newHamStripe2.id = taskID + "hamburgerStripe2";
  document.getElementById(taskID + "HamburgerMenu").appendChild(newHamStripe2);

  const newHamStripe3 = document.createElement("div");
  newHamStripe3.className = "hamburgerStripe hamburgerStripe3";
  newHamStripe3.id = taskID + "hamburgerStripe3";
  document.getElementById(taskID + "HamburgerMenu").appendChild(newHamStripe3);

  addMainTaskListnerGroup(); //trigger event listeners
  newSubTaskListnerGroup();
  hamburgerListnerGroup();
}

function addNewSubTask(clickedPlusSignID) {
  // strip number out of id
  const plusSignInteger = clickedPlusSignID.replace(/[^0-9]/g, "");
  // alert("plusSignInteger: " + plusSignInteger);
  // Identify which card triggered the function call
  const reconstitutedCardID = "task" + plusSignInteger;
  // alert("reconstitutedCardID: " + reconstitutedCardID);
  const triggerCardSubTaskStartNumber = reconstitutedCardID + "_sub1";
  // alert("triggerCardSubTaskStartNumber: "+triggerCardSubTaskStartNumber);
  const firstChildOfTriggerNode = document.getElementById(triggerCardSubTaskStartNumber);
  // alert("firstChildOfTriggerNode.id: " + firstChildOfTriggerNode.id);
  const childNodeArray = [];
  if (firstChildOfTriggerNode != null) {
    let childNodeString = firstChildOfTriggerNode;
    const childNodeStringID = childNodeString.id;
    while (childNodeString.id.includes("_sub")) {
      childNodeString = childNodeString.nextElementSibling;
      childNodeArray.push(childNodeStringID);
      console.log(childNodeArray);
    }
  } else {
    const latchSubtaskTo = reconstitutedCardID;
    const newSubIDInteger = 1;
    const parentCardID = reconstitutedCardID;
    insertSubTask(latchSubtaskTo, newSubIDInteger, parentCardID);
    return;
  }
  childNodeArray.pop();
  const latchSubtaskTo = childNodeArray[childNodeArray.length - 1];
  const slicingPoint = latchSubtaskTo.indexOf("_");
  const newSubIDIntegerSlice = latchSubtaskTo.slice(slicingPoint);
  const newSubIDIntegerRaw = newSubIDIntegerSlice.replace(/[^0-9]/g, "");
  const newSubIDInteger = +newSubIDIntegerRaw + 1;
  const parentCardID = reconstitutedCardID;
  insertSubTask(latchSubtaskTo, newSubIDInteger, parentCardID);
}

function insertSubTask(latchSubtaskTo, newSubIDInteger, parentCardID, subTaskName = prompt("Please enter your subToDo", "My subToDo")) {
  const subTaskID = parentCardID + "_sub" + newSubIDInteger;
  const newSubTaskNode = document.createElement("section");
  newSubTaskNode.className = "gridContainer cardGrid subTask";
  newSubTaskNode.id = subTaskID;
  document.getElementById(latchSubtaskTo).after(newSubTaskNode);

  const newSubCheckBoxGrid = document.createElement("div");
  newSubCheckBoxGrid.className = "gridContainer checkBoxGrid";
  newSubCheckBoxGrid.id = subTaskID + "checkBoxGrid";
  document.getElementById(subTaskID).appendChild(newSubCheckBoxGrid);

  const newSubCheckBox = document.createElement("INPUT");
  newSubCheckBox.setAttribute("type", "CheckBox");
  newSubCheckBox.setAttribute("name", "taskCheckBox");
  newSubCheckBox.id = subTaskID + "checkbox";
  document.getElementById(subTaskID + "checkBoxGrid").appendChild(newSubCheckBox);

  const newSubTaskZone = document.createElement("div");
  newSubTaskZone.className = "gridContainer taskZone";
  newSubTaskZone.id = subTaskID + "TaskZone";
  newSubTaskZone.innerHTML = "<h3>" + subTaskName;
  document.getElementById(subTaskID).appendChild(newSubTaskZone);

  const newSubHamburgerMenuBuffer = document.createElement("div");
  newSubHamburgerMenuBuffer.className = "gridContainer hamburgerMenuBuffer";
  newSubHamburgerMenuBuffer.id = subTaskID + "HamburgerMenuBuffer";
  document.getElementById(subTaskID).appendChild(newSubHamburgerMenuBuffer);

  const newSubHamburgerMenu = document.createElement("div");
  newSubHamburgerMenu.className = "gridContainer hamburgerMenu";
  newSubHamburgerMenu.id = subTaskID + "HamburgerMenu";
  document.getElementById(subTaskID + "HamburgerMenuBuffer").appendChild(newSubHamburgerMenu);

  const newHamStripe1 = document.createElement("div");
  newHamStripe1.className = "hamburgerStripe hamburgerStripe1";
  newHamStripe1.id = subTaskID + "hamburgerStripe1";
  document.getElementById(subTaskID + "HamburgerMenu").appendChild(newHamStripe1);

  const newHamStripe2 = document.createElement("div");
  newHamStripe2.className = "hamburgerStripe hamburgerStripe2";
  newHamStripe2.id = subTaskID + "hamburgerStripe2";
  document.getElementById(subTaskID + "HamburgerMenu").appendChild(newHamStripe2);

  const newHamStripe3 = document.createElement("div");
  newHamStripe3.className = "hamburgerStripe hamburgerStripe3";
  newHamStripe3.id = subTaskID + "hamburgerStripe3";
  document.getElementById(subTaskID + "HamburgerMenu").appendChild(newHamStripe3);

  addMainTaskListnerGroup(); //trigger event listeners
  newSubTaskListnerGroup();
  hamburgerListnerGroup();
}

function setPlusColor(plusID, color) {
  document.getElementById(plusID + "Vertical").style.backgroundColor = color;
  document.getElementById(plusID + "Horizontal").style.backgroundColor = color;
}

function hamClick() {
  console.log("HamburgerMenu clicked");
}
