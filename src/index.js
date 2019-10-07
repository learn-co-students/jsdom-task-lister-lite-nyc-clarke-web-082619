document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit",function(event){
      event.preventDefault();
      const tasks = document.getElementById("tasks");
      const taskToAdd = document.createElement("li");
      const priority = document.getElementById("priority").value;
      const button = document.createElement("button");
      button.addEventListener("click",function(event) {
        button.parentNode.remove();
      });
      button.innerHTML = "X";
      button.setAttribute("id", "delete-list-item");
      set_priority(taskToAdd,priority);
      taskToAdd.innerText = document.getElementById("new-task-description").value;
      taskToAdd.appendChild(button);
      tasks.appendChild(taskToAdd);
  })    
});

function set_priority(task,priority) {
  switch (priority) {
    case "high":
    task.style.color = "red";
    break;
    case "low":
      task.style.color = "green";
    break;
    default: 
      task.style.color = "gold";
  } 
}
