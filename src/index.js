document.addEventListener("DOMContentLoaded", () => {
  // your code here
});



document.addEventListener("click", (event) =>{
  // console.log(event.target)
  // console.log(event.target.className)
  event.preventDefault();

  if (event.target.value === "Create New Task") {
    let list = document.createElement("li");
    let button = document.createElement("button");
    button.innerHTML = "X";
    button.className = "delete";
    button.id = `${document.getElementById("new-task-description").value}`
    list.innerHTML = document.getElementById("new-task-description").value;
    let tasks = document.getElementById("tasks");
    tasks.appendChild(list).appendChild(button)
  } else if (event.target.className === "delete") {
    document.getElementById(event.target.id).parentElement.remove()
  }

});
let buttons = document.getElementsByClassName("delete")
for (let i = 0; i < buttons.length; i++){
  let button =  buttons[i]
  addEventListener("click", (event)=>{
    event.preventDefault();
   });
}
