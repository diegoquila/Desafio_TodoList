const tareas = [
  { descripcion: "Tarea 1", completado: false },
  { descripcion: "Tarea 2", completado: false },
  { descripcion: "Tarea 3", completado: false },
];

const tareaInput = document.getElementById("tareaInput");
const agregarTareaButton = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");
const totalTareasElement = document.getElementById("totalTareas");
const tareasRealizadasElement = document.getElementById("tareasRealizadas");

// Función para actualizar la lista de tareas en la página
function actualizarLista() {
  listaTareas.innerHTML = "";
  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
            ${tarea.descripcion}
            <button class="borrar" data-index="${index}">Borrar</button>
            <button class="completar" data-index="${index}">Cambiar</button>
        `;
    if (tarea.completado) {
      li.style.textDecoration = "line-through";
    }
    listaTareas.appendChild(li);
  });
  totalTareasElement.textContent = tareas.length;
  const tareasRealizadas = tareas.filter((tarea) => tarea.completado).length;
  tareasRealizadasElement.textContent = tareasRealizadas;
}

// Agregar una nueva tarea
agregarTareaButton.addEventListener("click", () => {
  const nuevaTarea = tareaInput.value.trim();
  if (nuevaTarea !== "") {
    tareas.push({ descripcion: nuevaTarea, completado: false });
    tareaInput.value = "";
    actualizarLista();
  }
});

// Borrar una tarea
listaTareas.addEventListener("click", (event) => {
  if (event.target.classList.contains("borrar")) {
    const index = event.target.getAttribute("data-index");
    tareas.splice(index, 1);
    actualizarLista();
  }
});

// Marcar una tarea como completada
listaTareas.addEventListener("click", (event) => {
  if (event.target.classList.contains("completar")) {
    const index = event.target.getAttribute("data-index");
    tareas[index].completado = !tareas[index].completado;
    actualizarLista();
  }
});

// Mostrar la lista inicial de tareas
actualizarLista();
