// Listado de usuarios y rutinas disponibles (puedes personalizar esto)
const users = [
    { username: "Usuario1", assignedRoutine: null },
    { username: "Usuario2", assignedRoutine: null },
    // Agrega más usuarios aquí
];

const availableRoutines = ["Rutina de Cardio", "Rutina de Fuerza", "Rutina de Flexibilidad", "Rutina de Resistencia"];

// Función para mostrar la lista de usuarios y rutinas
function displayUsersAndRoutines() {
    const userList = document.getElementById("userList");
    userList.innerHTML = ""; // Limpia la lista

    users.forEach(user => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${user.username}</span>
            <button class="assignButton">Asignar Rutina</button>
        `;
        const assignButton = listItem.querySelector(".assignButton");
        assignButton.addEventListener("click", () => assignRoutine(user));

        userList.appendChild(listItem);
    });

    const rutinasList = document.getElementById("rutinas");
    rutinasList.innerHTML = ""; // Limpia la lista

    availableRoutines.forEach(routine => {
        const listItem = document.createElement("li");
        listItem.innerText = routine;
        rutinasList.appendChild(listItem);
    });
}

// Función para asignar una rutina a un usuario
function assignRoutine(user) {
    const selectedRoutine = prompt(`Asignar rutina a ${user.username}.\nRutinas disponibles: ${availableRoutines.join(", ")}`);
    if (availableRoutines.includes(selectedRoutine)) {
        user.assignedRoutine = selectedRoutine;
        displayUsersAndRoutines();
    } else {
        alert("Rutina no válida. Por favor, selecciona una rutina disponible.");
    }
}

// Inicializa la página
displayUsersAndRoutines();
