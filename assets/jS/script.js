// Adding DOM object reference so that when we add a new task it lets us create one
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Task Handler - must be before the other content or the var would be null
var createTaskHandler = function() {
   // created new item
  var listItemEl =document.createElement("li");
  listItemEl.className = "task-item";
  // add the task/ changes the text 
  listItemEl.textContent = "This is a new task.";
   // style the item to match and append it to the end of the task list
  tasksToDoEl.appendChild(listItemEl);
};
// Event Listener
buttonEl.addEventListener("click", createTaskHandler);


