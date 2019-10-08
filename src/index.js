document.addEventListener("DOMContentLoaded", () => {
  
  const taskForm = document.getElementById("create-task-form");
    taskForm.addEventListener('submit', function(e){
     e.preventDefault();
  const tasks = document.getElementById("tasks");
  const newTaskName = document.getElementById("new-task-description");
  const newTask = document.createElement('li');
  newTask.innerHTML = newTaskName.value;
  tasks.appendChild(newTask);
  e.target.reset();
  });
});