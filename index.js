// ***
// g = document.createElement('div');
// g.setAttribute("id", "Div1");

//event change

//stocker dans le local storage la liste

//consulter le local storage au lancement de l'application pour ajouter les todos

//variables
const newTaskInput = document.getElementById("todo-input");
const taskList = document.getElementById("todo-list-container");
const form = document.getElementById("todo-list-form");
let isDoubleClick = false;
let timer;
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

//display new task
newTaskInput.addEventListener("change", () => {
  console.log(newTaskInput.value);
  let newTask = `<li class="task"><span><i class="fa-regular fa-square"></i> </span> ${newTaskInput.value}</li>`;
  taskList.innerHTML += newTask;
  newTaskInput.value = "";
});

// console.log(task);
// Délégation d'événement pour gérer tous les .task
taskList.addEventListener("click", (e) => {
  timer = setTimeout(() => {
    if (!isDoubleClick) {
      const li = e.target.closest(".task");
      if (li) {
        li.classList.toggle("isDone");
        // Optionnel : changer l'icône
        const icon = li.querySelector("i");
        if (icon) {
          if (li.classList.contains("isDone")) {
            icon.className = "fa-regular fa-square-check";
          } else {
            icon.className = "fa-regular fa-square";
          }
        }
      }
      console.log(e.target);
    }
    isDoubleClick = false;
  }, 70);
});

taskList.addEventListener("dblclick", (e) => {
  clearTimeout(timer);
  isDoubleClick = true;
  console.log("double click");
  const li = e.target.closest(".task");
  li.remove();
});
