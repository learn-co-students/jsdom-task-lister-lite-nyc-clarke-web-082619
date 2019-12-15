
const form = document.querySelector('form');
const todoListNode = document.querySelector('ul.todolist');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let inputValue = event.target.newTodo.value;

  let ulTag = document.querySelector('ul.todolist');
  ulTag.append(createTodoItem(inputValue));
  event.target.newTodo.value = '';
})

// add event lister to todoListNode
todoListNode.addEventListener('click', function(event) {

  if (event.target.tagName === 'BUTTON') {
    event.target.parentNode.remove();
  }
})



function createTodoItem(content) {
  let newLi = document.createElement('li');
  newLi.classList.add('list-items');
  newLi.innerHTML = `
    <p>${content}</p>
    <button>🗑</button>
  `
  return newLi
}


document.addEventListener("DOMContentLoaded", () => {
  const taskSubmitForm = document.getElementById('create-task-form');
  taskSubmitForm.addEventListener('submit', newTasks);
  });
  
  const newTasks = event =>{
   event.preventDefault();
   const listedTask = document.createElement('li');
   listedTask.innerText = document.getElementById("new-task-description").value;
   document.getElementById('tasks').appendChild(listedTask);
  }