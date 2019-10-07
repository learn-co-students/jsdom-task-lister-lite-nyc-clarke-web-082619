document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const newTaskName = document.getElementById('new-task-description');
    const newTask = document.createElement('li');
    newTask.innerText = newTaskName.value;
    document.getElementById('tasks').appendChild(newTask);
    e.target.reset();
  });

});



// const newtask = event =>{
//   event.preventDefault();
//   const newTaskName = document.getElementById('new-task-description');
//   const newTask = document.createElement('li');
//   newTask.innerText = newTaskName.value;

//   appendNewTask(newTask);
//   event.target.reset();
// }

// const appendNewTask = task =>{  
//   document.getElementById('tasks').appendChild(task);
// }