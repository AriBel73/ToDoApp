// declaring variables
var newToDo = document.getElementById("task");
var addButton = document.getElementById("add");
var clearButton = document.getElementById("clear");
var taskList = document.getElementById("taskList");
var doneList = document.getElementById("doneList");
var error = document.getElementById("error");


// Event handler for the add button's click event: when the user clicks add button
addButton.addEventListener("click" , addItem);
function addItem(){
     
    // verify if the user inputted a value in the text input box. If not, we alert the user of invalid input
    if(newToDo.value == ""){
        // display an error message
        error.innerHTML = "Invalid input!";
        error.style.textAlign = "center";
    }
    else {
        // remove the error message
        error.innerHTML = "";

        // create and append a new list item
        var newItem = document.createElement("li");
        newItem.innerHTML = newToDo.value;
        taskList.appendChild(newItem);
       
        // clear text input box
        newToDo.value = "";
       
        // create the chekbox
        var doneChekbox = document.createElement("input");
        doneChekbox.type = "checkbox";
        doneChekbox.className = "done";
        doneChekbox.addEventListener("click" , removeTask);
        newItem.appendChild(doneChekbox);
    } 
}

// remove an element from the list TO-DO
function removeTask(i){
    var taskItem = i.target.parentElement;
    taskList.removeChild(taskItem);

    // insert the element in the separate list DONE
    doneList.appendChild(taskItem);
 };

// Event handler for the add button's click event: when the user clicks clear button
// clear entire TO-DO list
clearButton.addEventListener("click" , function(){
    taskList.innerHTML = "";
    error.innerHTML = "";
});