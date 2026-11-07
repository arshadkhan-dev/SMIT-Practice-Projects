let inputField = document.getElementById("inputField");
let addTask = document.getElementById("addTask");
let List = document.getElementById("list");

let totalTaskCount = 0;
let completedTaskCount = 0;
let todoTaskCount = 0;

let totalTasks = document.getElementById("totalTasks");
let completedTasks = document.getElementById("completedTasks");
let todoTasks = document.getElementById("remainingTasks");

addTask.addEventListener("click", function () {
  let li = document.createElement("li");
  let buttons = document.createElement("div");
  let completeBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");
  let span = document.createElement("span");

  deleteBtn.textContent = "Delete";
  completeBtn.textContent = "Done";

  if (inputField.value === "Enter Task" || inputField.value === "") {
    alert("Write your task to add.");
  } else {
    totalTaskCount++;
    todoTaskCount++;
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("deleteBtn");
    completeBtn.classList.add("btn");
    deleteBtn.style.marginLeft = "10px";
    li.classList.add("styleTask");
    span.textContent = inputField.value;
    buttons.append(completeBtn, deleteBtn);
    li.append(span, buttons);
    List.appendChild(li);
    inputField.value = "";
    totalTasks.textContent = `${totalTaskCount}`;
    completedTasks.textContent = `${completedTaskCount}`;
    todoTasks.textContent = `${todoTaskCount}`;
  }

  deleteBtn.addEventListener("click", function (event) {
    if (li.classList.contains("completed")) {
      if (todoTaskCount > 0) {
        todoTaskCount--;
      }
    } else {
      if (completedTaskCount > 0) {
        completedTaskCount--;
      }
    }

    totalTaskCount--;
    li.remove();

    totalTasks.textContent = `${totalTaskCount}`;
    completedTasks.textContent = `${completedTaskCount}`;
    todoTasks.textContent = `${todoTaskCount}`;
  });

  completeBtn.addEventListener("click", function () {
    if (!li.classList.contains("completed")) {
      span.style.textDecoration = "line-through";
      completedTaskCount++;
      todoTaskCount--;
    } else {
      span.style.textDecoration = "none";
      li.classList.remove("compeleted");
      completedTaskCount--;
      todoTaskCount++;
    }

    totalTasks.textContent = `${totalTaskCount}`;
    completedTasks.textContent = `${completedTaskCount}`;
    todoTasks.textContent = `${todoTaskCount}`;
  });
});
