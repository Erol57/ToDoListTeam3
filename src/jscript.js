
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
const taskPlusses = document.querySelectorAll(".addTask");

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
    addItem ();
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

/*
function addItem(itemname = prompt("Please enter your ToDo", "My ToDo")) {
  //Add li in myList 
  const newTaskNode = document.createElement("div");
  //const textnewTaskNode = document.createTextnewTaskNode(itemname);
  //newTaskNode.appendChild(textnewTaskNode);
  
  
  document.getElementById("bodyGrid").appendChild(newTaskNode);
  //textnewTaskNode.className = "text";

  
  //set class of li
  newitem = document.getElementById("ToDoList").appendChild(newTaskNode);
  newitem.className = "card";

  //Add i for complete
  const newTaskNode_i_c = document.createElement("i");
  newitem.appendChild(newTaskNode_i_c);
  newitem_i_c = newitem.appendChild(newTaskNode_i_c);
  newitem_i_c.className = "fa fa-circle-thin co";

  //Add i for hambumen
  const newTaskNode_i_h = document.createElement("i");
  newitem.appendChild(newTaskNode_i_h);
  newitem_i_h = newitem.appendChild(newTaskNode_i_h);
  newitem_i_h.className = "fa fa-bars ham";

  //<p class="text">Buy Coffee</p>
  const newTaskNode_i_p = document.createElement("p");
  newitem.appendChild(newTaskNode_i_p);
  newitem_i_p = newitem.appendChild(newTaskNode_i_p);
  newitem_i_p.className = "text";
  const textnewTaskNode = document.createTextnewTaskNode(itemname);
  newitem_i_p.appendChild(textnewTaskNode);
}
*/