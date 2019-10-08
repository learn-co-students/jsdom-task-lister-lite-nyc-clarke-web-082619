document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form");
      input = document.getElementById("new-task-description");
      li = document.createElement("li");
      tasks = document.getElementById("tasks");

  form.addEventListener("submit", function(){
    event.preventDefault();
    
    li.innerHTML = input.value + '<button id="deleteBtn" >X</button>';

    tasks.appendChild(li);
    form.reset();

  let button = document.getElementById("deleteBtn");
  button.addEventListener("click", function(){
    this.parentNode.remove();
  })

  })


});


// let form = document.getElementById("create-task-form");
//   let tasks = document.getElementById("tasks");
//   let newLi = document.createElement("li");
//   let li = document.getElementById("li");
//   let input = document.getElementById("new-task-description");

//   form.addEventListener("submit", function(){
//     tasks.appendChild(newLi);
//     li.appendChild(input);
//   })


// document.getElementById("create-task-form").addEventListener("submit", function() {
//   event.preventDefault();
//   document.createElement("li");
//   let tasks = document.getElementById("tasks");
//   let li = document.getElementById("li");
//   let input = document.getElementById("new-task-description").value;
//   tasks.appendChild(li);
//   li.appendChild(input);
// });

// let li = document.createElement("li");
//   document.getElementById("tasks").appendChild(li);
//   document.getElementById("li").appendChild(document.getElementById('new-task-description').value);

// let li = document.createElement("li");
//   let task = document.getElementById("new-task-description").value;
//   document.getElementById("tasks").appendChild(li);
//   let listings = "<li>" + task + "</li>";
//   document.getElementById("li").appendChild(listings);

// document.getElementById("submit").onclick = function (){
//   let input = document.getElementById("new-task-description").value;
//   let li = "<li>" + input + "</li>";
//   document.getElementById("tasks").appendChild(li);
// }