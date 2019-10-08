const main = document.querySelector("#main-content");
const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")


taskForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const newTask = document.querySelector("#new-task-description").value
  taskList.innerHTML += `<li> ${newTask} </li>`

  taskForm.reset(); 
});


/* 

1. Type task in the input field

2. click some form of a submit button

3. the string provided should appear on the DOM after 
the submit button has been activated. 

*/ 