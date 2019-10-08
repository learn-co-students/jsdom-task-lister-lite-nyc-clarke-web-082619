document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form");
      descInput = document.getElementById("new-task-description");
      userInput = document.getElementById("new-task-user");
      li = document.getElementById("li");
      tasks = document.getElementById("tasks");
      prioritySelection = document.getElementById("priority");

  form.addEventListener("submit", function(){
    event.preventDefault();

    let li = document.createElement("li")
    li.innerHTML = descInput.value + " - " + userInput.value + " " + '<button class="deleteBtn" id="deleteBtn" >X</button>' 
    
    // + editForm + '<button class="editBtn" id="editBtn" >Edit</button>';

    li.setAttribute("priority", prioritySelection.options[prioritySelection.selectedIndex].id);
    
    if (li.getAttribute("priority") === "high"){
      li.style.color = "red"
    }
    else if (li.getAttribute("priority") === "medium"){
      li.style.color = "#cdd403"
    }
    else if (li.getAttribute("priority") === "low"){
      li.style.color = "green"
    } 

    tasks.appendChild(li);
    form.reset();

    let deletes = document.querySelectorAll('.deleteBtn');
    
    deletes.forEach(btn => {
        btn.addEventListener("click", function(){
        tasks.removeChild(this.parentNode);
      })}
    )
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