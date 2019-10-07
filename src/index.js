document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create-task-form').addEventListener('submit', function(event) {
      event.preventDefault();
    });

    

    document.querySelector('#create-task-form').addEventListener('submit', function(event) {
      let description = document.getElementById("new-task-description").value;
      if (validateForm()) {
        let newTask = document.createElement('li');
        newTask.setAttribute('class', 'task');
        newTask.textContent = description;
        document.querySelector('#tasks').appendChild(newTask);
      }
    });

    // document.querySelector('#create-task-form').setAttribute('onsubmit', "return validateForm()");
  


});

function validateForm() {
  let description = document.getElementById("new-task-description").value;
  if (description.trim() == "") {
    alert("Task cannot be empty");
    return false;
  } else {
    return true;
  }
}