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
      console.log("newsubtask");
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


function checkboxListener() {
  const checkbox = document.getElementsByClassName("checkBoxGrid"); //*works
  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("change", function () {
      if (this.children[0].checked) {
        this.parentElement.style.gridColumnStart = "3"; //*mark card done
        const taggedText = this.parentElement.children[1].innerHTML;
        let strippedText = String(taggedText);
        strippedText = strippedText.replace("<h3>", "<s>");
        strippedText = strippedText.replace("</h3>", "</s>");
        const newText = this.parentElement.children[1].innerHTML = strippedText;
      } else {
        const taggedText = this.parentElement.children[1].innerHTML; //*mark card undone
        let strippedText = String(taggedText);
        strippedText = strippedText.replace("<s>", "<h3>");
        strippedText = strippedText.replace("</s>", "</h3>");
        this.parentElement.style.gridColumnStart = "2";
        const restoredText = this.parentElement.children[1].innerHTML = strippedText;
      }
    });
  }
}

addMainTaskListnerGroup(); //trigger event listeners
newSubTaskListnerGroup();
hamburgerListnerGroup();
checkboxListener();

function addMainTask(taskName = prompt("Please enter your ToDo", "My ToDo")) {
  let taskCounter = document.querySelectorAll(".task.cardGrid").length + 1;
  let taskID = "task" + taskCounter;
  const newTaskNode = document.createElement("section");
  newTaskNode.className = "gridContainer cardGrid task";
  newTaskNode.id = taskID;
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

  const newHamburgerMenuBuffer = document.createElement("div");
  newHamburgerMenuBuffer.className = "gridContainer hamburgerMenuBuffer";
  newHamburgerMenuBuffer.id = taskID + "HamburgerMenuBuffer";
  document.getElementById(taskID).appendChild(newHamburgerMenuBuffer);

  const newHamburgerMenu = document.createElement("div");
  newHamburgerMenu.className = "gridContainer hamburgerMenu";
  newHamburgerMenu.id = taskID + "HamburgerMenu";
  document
    .getElementById(taskID + "HamburgerMenuBuffer")
    .appendChild(newHamburgerMenu);

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

  newSubTaskListnerGroup();
  hamburgerListnerGroup();
  checkboxListener();
}

function setPlusColor(plusID, color) {
  document.getElementById(plusID + "Vertical").style.backgroundColor = color;
  document.getElementById(plusID + "Horizontal").style.backgroundColor = color;
}

function hamClick() {
  console.log("HamburgerMenu clicked");
}
