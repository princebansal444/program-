let task = document.getElementById("input");
let button = document.getElementById("add");
let taskList = document.getElementById("list");


let list = [];
function addItem() {
    const taskValue = task.value;
    if (taskValue===""){
        return;
    }
    else {
        list.push(taskValue);
    }

}

button.addEventListener("click", function() {
    
    const taskText = task.value;
    const deletebutton= document.createElement("button");
    deletebutton.textContent = "delete";
    deletebutton.className = "delete-button";

    
    const newLi = document.createElement("li");

    newLi.textContent = taskText;

    newLi.appendChild(deletebutton);
    taskList.appendChild(newLi);
    
     
    deletebutton.addEventListener("click", function(){
        taskList.remove(newLi);
    });

    
    task.value = "";
});
