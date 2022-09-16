// Adding DOM object reference so that when we add a new task it lets us create one
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Task Handler - must be before the other content or the var would be null
var createTaskHandler = function(event) {
  event.preventDefault();
   // reading tasks entered input from form 
  var taskNameInput = document.querySelector("input[name='task-name']").value;
   // get the value of the driopdown to show up below task 
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
   // create list item
  var listItemEl =document.createElement("li");
  listItemEl.className = "task-item";

  // create a div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  // give it a class name 
  taskInfoEl.className = "task-info";
  // add html content to div
  taskInfoEl.innerHTML = "<h3 class='tasl-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
  // appended entire li to the parent ul(taskToDoEl)
  listItemEl.appendChild(taskInfoEl);
   // style the list item to match and append the list item to add to the list 
  tasksToDoEl.appendChild(listItemEl);
};

// Event Listener - Changed from buttonEL to listen to entire form and not just button function
formEl.addEventListener("submit", createTaskHandler);


