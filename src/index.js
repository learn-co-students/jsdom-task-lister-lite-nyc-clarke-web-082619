document.addEventListener("DOMContentLoaded", () => {
  // your code here

 //find the task form
 const taskSubmitForm = document.getElementById('create-task-form');

 //add event listener for submit
taskSubmitForm.addEventListener('submit', newTasks);
});


const newTasks = event =>{
  //prevents normal submission
  event.preventDefault();

  //creates new list elements
  const task = document.createElement('Li');
  //sets list element text to the value attached to the label by element-id
  task.innerText = document.getElementById("new-task-description").value;
//attaches that task to the task ordered list
  document.getElementById('tasks').appendChild(task);
}