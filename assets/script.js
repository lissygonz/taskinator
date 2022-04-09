var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

  event.preventDefault();

  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

//create list menu
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  //create div to hold task and add to listen item
  var taskInfoEl = document.createElement("div");

  //give it a class name
  taskInfoEl.className = "task-info";

  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class= 'task-type'>" + taskNameInput + "</span>";

  listItemEl.appendChild(taskInfoEl);

// add entire list item to list 
tasksToDoEl.appendChild(listItemEl);

};
 

formEl.addEventListener("submit", createTaskHandler);
