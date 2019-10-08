document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form');
  let ul = document.getElementById('tasks');

  form.addEventListener("submit", function(event){
    let newLi = document.createElement('li');
    let value = document.getElementById('new-task-description').value;
    newLi.innerText = value;
    ul.appendChild(newLi);
    event.preventDefault();
  });
});
