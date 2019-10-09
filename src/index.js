document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
  console.dir(form)

  // form.addEventListener
  form.addEventListener('submit', function(event){
    event.preventDefault()

    // console.log(event)
    // when user submits the form 
    // takes what is in te input
      // use javascript to get the input node
      // console.dir(event.target.newTask.value)
      // console.log(event.target.newTask.value)
      let inputValue = (event.target.newTask.value)
      let inputTag = document.getElementById("new-task-description")
      let newLi = document.createElement('li');
      newLi.innerText = inputValue;
      let ulTag = document.getElementById('tasks')
      ulTag.append(newLi)
      // console.log(inputTag.value)
    // adds it to the todo list
      
  });
});
