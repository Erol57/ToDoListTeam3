function addTaskListner() {
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

function getNodeCount() {
  const taskNodes = document.getElementsByClassName("task");
  nodeCount = taskNodes.length;
}

function removeTaskListner() {
  getNodeCount();
  const crosses = document.getElementsByClassName("removeTask plusSign");
  for (let i = 0; i < nodeCount; i++) {
    crosses[i].addEventListener("mouseover", function () {
      const hoverBackgroundColor = "green";
      crosses[i].children[0].style.backgroundColor = hoverBackgroundColor;
      crosses[i].children[1].style.backgroundColor = hoverBackgroundColor;
    });
  }
  for (let i = 0; i < nodeCount; i++) {
    crosses[i].addEventListener("mouseout", function () {
      const hoverOutBackgroundColor = "orangered";
      crosses[i].children[0].style.backgroundColor = hoverOutBackgroundColor;
      crosses[i].children[1].style.backgroundColor = hoverOutBackgroundColor;
    });
  }
  for (let i = 0; i < nodeCount; i++) {
    crosses[i].addEventListener("click", function () {
      // console.log("remove task");
      // console.log(crosses[i].parentElement.parentElement);
      crosses[i].parentElement.parentElement.remove();
      getNodeCount();
    });
  }
}

function hamburgerListner() {
  getNodeCount();
  const burgers = document.getElementsByClassName("hamburgerMenu");
  for (let i = 0; i < nodeCount; i++) {
    burgers[i].addEventListener("mouseover", function () {
      const hoverBackgroundColor = "red";
      burgers[i].children[0].style.backgroundColor = hoverBackgroundColor;
      burgers[i].children[1].style.backgroundColor = hoverBackgroundColor;
      burgers[i].children[2].style.backgroundColor = hoverBackgroundColor;
    });
  }
  for (let i = 0; i < nodeCount; i++) {
    burgers[i].addEventListener("mouseout", function () {
      const hoverOutBackgroundColor = "blue";
      burgers[i].children[0].style.backgroundColor = hoverOutBackgroundColor;
      burgers[i].children[1].style.backgroundColor = hoverOutBackgroundColor;
      burgers[i].children[2].style.backgroundColor = hoverOutBackgroundColor;
    });
  }
  for (let i = 0; i < nodeCount; i++) {
    burgers[i].addEventListener("click", function () {
      hamBurgerClick(burgers);
    });
  }
}


function hamBurgerClick() {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
      const select = dropdown.querySelector('.select');
      const menu = dropdown.querySelector('.menu');
      select.addEventListener('click', () => {
          select.classList.toggle('select-clicked');
          menu.classList.toggle('menu-open');
      });
  });
  }

function checkboxListener() {
  getNodeCount();
  const checkbox = document.getElementsByClassName("checkBoxGrid");
  for (let i = 0; i < nodeCount; i++) {
    checkbox[i].addEventListener("change", function () {
      if (this.children[0].checked) {
        this.parentElement.style.gridColumnStart = "3";
        const taggedText = this.parentElement.children[1].innerHTML;
        let strippedText = String(taggedText);
        strippedText = strippedText.replace("<h3>", "<s>");
        strippedText = strippedText.replace("</h3>", "</s>");
        const newText = this.parentElement.children[1].innerHTML = strippedText;
      } else {
        const taggedText = this.parentElement.children[1].innerHTML;
        let strippedText = String(taggedText);
        strippedText = strippedText.replace("<s>", "<h3>");
        strippedText = strippedText.replace("</s>", "</h3>");
        this.parentElement.style.gridColumnStart = "2";
        const restoredText = this.parentElement.children[1].innerHTML = strippedText;
      }
    });
  }
}

getNodeCount();
addTaskListner(); //trigger event listeners
removeTaskListner();
hamburgerListner();
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

  const newsignBuffer = document.createElement("div");
  newsignBuffer.className = "gridContainer signBuffer";
  newsignBuffer.id = taskID + "signBuffer";
  document.getElementById(taskID).appendChild(newsignBuffer);

  const newPlusSign = document.createElement("div");
  newPlusSign.className = "gridContainer removeTask plusSign";
  newPlusSign.id = taskID + "removeTask";
  document.getElementById(taskID + "signBuffer").appendChild(newPlusSign);

  const newVertical = document.createElement("div");
  newVertical.className = "removeTask plusLine vertical";
  newVertical.id = taskID + "plusVertical";
  document.getElementById(taskID + "removeTask").appendChild(newVertical);

  const newHorizontal = document.createElement("div");
  newHorizontal.className = "removeTask plusLine horizontal";
  newHorizontal.id = taskID + "plusHorizontal";
  document.getElementById(taskID + "removeTask").appendChild(newHorizontal);

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

  removeTaskListner();
  hamburgerListner();
  checkboxListener();
}

function setPlusColor(plusID, color) {
  document.getElementById(plusID + "Vertical").style.backgroundColor = color;
  document.getElementById(plusID + "Horizontal").style.backgroundColor = color;
}


