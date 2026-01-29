function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") {
    alert("Enter a task first !");
    return;
  }

  let li = document.createElement("li");
  li.innerText = taskText;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
  // adding a enter press feature

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

