const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const text = input.value.trim();

  if (text === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${text}</span>
    <button onclick="deleteTask(this)">X</button>
  `;

  list.appendChild(li);
  input.value = "";
}

function deleteTask(btn) {
  btn.parentElement.remove();
}