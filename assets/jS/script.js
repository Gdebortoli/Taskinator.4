// Generate Unique ID's to each task
var taskIdCounter = 0;

// Adding DOM object reference so that when we add a new task it lets us create one
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Task Handler - Creating the form and collecting data - must be before the other content or the var would be null
var taskFormHandler = function (event) {
  event.preventDefault();
  // reading tasks entered input from form 
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  // get the value of the dropdown to show up below task 
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  // check to see if input values are empty strings
  if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }
  // reset the form
  formEl.reset();
  
  // package up data as an object 
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };
  // send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // add task id as a custom attribute
  listItemEl.setAttribute("data-task-id", taskIdCounter);

  // create a div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  // give it a class name 
  taskInfoEl.className = "task-info";
  // add html content to div
  taskInfoEl.innerHTML = "<h3 class='tasl-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  // appended entire li to the parent ul(taskToDoEl)
  listItemEl.appendChild(taskInfoEl);
  // create buttons that correspond to the current task
  var taskActionsEl = createTaskActions(taskIdCounter);
  listItemEl.appendChild(taskActionsEl);

  // style the list item to match and append the list item to add to the list 
  tasksToDoEl.appendChild(listItemEl);

  // increase task counter for next unique id 
  taskIdCounter++; 
};

// Form elements for tasks
var createTaskActions = function(taskId) {
  var actionContainerEl = document.createElement("div");
  actionContainerEl.className = "task-actions"

  // Create Edit Button
  var editButtonEl = document.createElement("button");
  editButtonEl.textContent = "Edit";
  editButtonEl.className = "btn edit-btn";
  editButtonEl.setAttribute("data-task-id", taskId);
// adds btn to the div
  actionContainerEl.appendChild(editButtonEl);
  // Create Delete Button
  var deleteButtonEl = document.createElement("button");
  deleteButtonEl.textContent = "Delete";
  deleteButtonEl.className = "btn delete-btn";
  deleteButtonEl.setAttribute("data-task-id", taskId);
// adds btn to the div
  actionContainerEl.appendChild(deleteButtonEl);
// Dropdown/Select element
var statusSelectEl = document.createElement("select");
statusSelectEl.className = "select-status";
statusSelectEl.setAttribute("name", "status-change");
statusSelectEl.setAttribute("data-task-id", taskId);
// Dropdown Options
var statusChoices = ["To Do", "In-Progress", "Completed"];
for (var i = 0; i < statusChoices.length; i++) {
// i = 0 - defines first variable, i > length - keeps loop running by checking it against the # of items in the array
// i++ - incrememnts the counter by one adter each loop iteration, statusChoices[i] returns value of the array at teh index (starts at first item)

// Create option element
var statusOptionEl = document.createElement("option");
statusOptionEl.textContent = statusChoices[i];
statusOptionEl.setAttribute("value", statusChoices[i]);

// append to select 
statusSelectEl.appendChild(statusOptionEl);

}

actionContainerEl.appendChild(statusSelectEl);

// to verify data returns correctly
return actionContainerEl;
};

// Event Listener - Changed from buttonEL to listen to entire form and not just button function
formEl.addEventListener("submit", taskFormHandler);

