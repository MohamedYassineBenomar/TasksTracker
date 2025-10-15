let btnAddTaskObj = document.querySelector("#btn-add-task");

let btnRemoveAllTasksObj = document.querySelector("#btn-removeall-tasks");

let inputTxtObj = document.querySelector("#input-txt");

let tasksContainerObj = document.querySelector("#tasks-container");

let taskCounter = 0;

btnAddTaskObj.addEventListener("click", function() {
    let newTaskObj = document.createElement("div");
        // Get the text inside the input

    let newTxtContent = `Task: ${taskCounter} \n ${inputTxtObj.value}\n`;
    newTaskObj.textContent = newTxtContent;
    if( (taskCounter % 2 === 0)) {
        newTaskObj.classList.add("tasks","uniTasks");  
    } else {
        newTaskObj.classList.add("tasks","duoTasks");
    }
    let btnRemoveTaskObj = document.createElement("button");
    btnRemoveTaskObj.textContent = "Remove"
    btnRemoveTaskObj.addEventListener("click", function(){
        newTaskObj.remove();
        taskCounter--;
    })
    btnRemoveTaskObj.classList.add("removeBtns"); 
    newTaskObj.append(btnRemoveTaskObj);
    tasksContainerObj.append(newTaskObj);
    taskCounter++;


})

btnRemoveAllTasksObj.addEventListener("click", function() {
    taskCounter = 0;
    tasksContainerObj.textContent = "";
  


})