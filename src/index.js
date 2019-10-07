document.addEventListener("DOMContentLoaded", () => {
  // your code here
  function addTask(event){
    event.preventDefault();
    let node = document.createElement("li");
    let v = document.getElementById("new-task-description").value;
    let textnode = document.createTextNode(v)
    let buttonnode= document.createElement("button");
    buttonnode.textContent = "X";
    buttonnode.setAttribute("data-description", textnode.textContent);
    buttonnode.onclick = function(){
      buttonnode.parentElement.remove();
      return;
    }
    node.appendChild(textnode);
    node.appendChild(buttonnode);
    //alert("HELLO");
    document.getElementById("tasks").appendChild(node);
  }
  document.getElementById("create-task-form").addEventListener("submit", addTask);
});
