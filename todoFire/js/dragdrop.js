function allowDrop(ev){
  ev.preventDefault();
}

document.ondragstart = function(ev) {
  ev.dataTransfer.setData("text", ev.target.id)
}

function drop(ev){
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  if(ev.target.className === "todo-list"){
    ev.target.appendChild(document.getElementById(data));
  } else {
    console.log("ERROR with the drop function")
  }
}