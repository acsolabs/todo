// ***
// g = document.createElement('div');
// g.setAttribute("id", "Div1");

//event change
//ajouter sur le dom ce qui est tapé dans l'input à la validation du form
//monInput.value

//supprimer un todo lorsque l'on clique dessus (.remove())

//stocker dans le local storage la liste

//consulter le local storage au lancement de l'application pour ajouter les todos

// lui ajouter un eventlistener
//recuperer sa value
// inserer la value dans un li et l'inserer dans le dom
// si un li est clické, s'il a la classe validé, on le supprime du dom, sinon on lui ajoute la classe validé

//variables
const newTaskInput = document.getElementById("todo-input");
const taskList = document.getElementById("todo-list-container");
const form = document.getElementById("todo-list-form");
// Suppression de la récupération de tous les .task

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
    console.log(e.target);
  }
});

const removeTask = () => {
  taskList.addEventListener("dblclick", () => {
    console.log("ok");
  });
};

removeTask();
