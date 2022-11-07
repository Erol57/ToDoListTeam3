
function addItem(itemname = prompt("Please enter your ToDo", "My ToDo")) { 
    
    //Add li in myList
    const node = document.createElement("li");
    const textnode = document.createTextNode(itemname);
    node.appendChild(textnode);
    
    document.getElementById("ToDoList").appendChild(node);
    textnode.className = "text";
    
        //set class of li
        newitem = document.getElementById("ToDoList").appendChild(node);
        newitem.className = "item card";

                //Add i for complete
                const node_i_c = document.createElement("i");
                newitem.appendChild(node_i_c)
                newitem_i_c = newitem.appendChild(node_i_c)
                newitem_i_c.className = "fa fa-circle-thin co";              


                //Add i for hambumen
                const node_i_h = document.createElement("i");
                newitem.appendChild(node_i_h)
                newitem_i_h = newitem.appendChild(node_i_h)
                newitem_i_h.className = "fa fa-bars ham";

}


