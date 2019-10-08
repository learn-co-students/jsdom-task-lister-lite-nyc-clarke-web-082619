document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // const form = document.getElementById("create-task-form");
  document.addEventListener('click', function(e){
    e.preventDefault();
    // console.log(event.target)
    if (event.target.value === "Create New Task") {
      console.log(event.target.value)
      const newTaskName = document.getElementById('new-task-description');
      const newTask = document.createElement('li');
      const newbutton = document.createElement('button');
      newbutton.setAttribute('id', newTaskName.value);
      // newbutton.data-description = newTaskName.value;
      newTask.innerText = newTaskName.value;
      newbutton.innerText = "X";
      newbutton.className = "delete";
      document.getElementById('tasks').appendChild(newTask).appendChild(newbutton);
      newTaskName.value = "";
    } else if (event.target.className === "delete") {
      document.getElementById(event.target.id).parentElement.remove();
    } 
  });
  // form.addEventListener('button', function(e){

  // });

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