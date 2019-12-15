document.addEventListener('DOMContentLoaded', () => {
  const myList = document.getElementById('tasks');
  const taskSubmitForm = document.getElementById('create-task-form');
  const newTask = document.getElementById("new-task-description");

  taskSubmitForm.addEventListener('submit', addNewTask)
  myList.addEventListener('click', removeTask)

  function addNewTask(event) {
    event.preventDefault()
  
          myList.innerHTML += `<li><p>${newTask.value}</p><button>👶</button></li>`;
          newTask.value = ''
  }
  
  function removeTask(event) {
    console.log(event.target)
    if (event.target.tagName === 'BUTTON') {event.target.parentNode.remove()}
  }

})

