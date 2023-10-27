// Ejemplo de administrador para editar usuarios
const userList = document.getElementById('userList');

// Aquí debes cargar y mostrar la lista de usuarios y opciones de edición
// Por ejemplo, puedes usar AJAX para obtener los datos de usuarios desde el servidor y luego mostrarlos en esta página.
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Oculta todos los contenidos de las pestañas
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Desactiva todos los enlaces de pestañas
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Muestra la pestaña actual y marca el enlace como activo
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Mostrar la primera pestaña por defecto
document.getElementsByClassName("tablinks")[0].click();


// Función para cargar y mostrar la lista de usuarios
function loadUsers(userType) {
    fetch('usuarios.json') // Asegúrate de que la ruta sea correcta
        .then(response => response.json())
        .then(data => {
            const users = data.users;
            const userList = document.getElementById(`${userType}List`);
            userList.innerHTML = '';
        
            const filteredUsers = users.filter(user => user.role === userType);
        
            if (filteredUsers.length === 0) {
                userList.innerHTML = '<p>No hay usuarios de este tipo.</p>';
            } else {
                filteredUsers.forEach(user => {
                    const listItem = document.createElement('li');
                    const editButton = document.createElement('button');
                    editButton.innerText = 'Editar';
        
                    // Agrega campos de entrada para editar la información del usuario
                    const usernameInput = document.createElement('input');
                    usernameInput.value = user.username;
                    const birthdateInput = document.createElement('input');
                    birthdateInput.value = user.birthdate;
                    const addressInput = document.createElement('input');
                    addressInput.value = user.address;
                    const phoneInput = document.createElement('input');
                    phoneInput.value = user.phone;
        
                    // Botón "Guardar" para guardar los cambios
                    const saveButton = document.createElement('button');
                    saveButton.innerText = 'Guardar';
                    saveButton.style.display = 'none';
        
                    // Agregar eventos para editar y guardar
                    editButton.addEventListener('click', () => {
                        editButton.style.display = 'none';
                        saveButton.style.display = 'inline';
                        // Habilitar la edición de campos de entrada
                        usernameInput.removeAttribute('readonly');
                        birthdateInput.removeAttribute('readonly');
                        addressInput.removeAttribute('readonly');
                        phoneInput.removeAttribute('readonly');
                    });
        
                    saveButton.addEventListener('click', () => {
                        editButton.style.display = 'inline';
                        saveButton.style.display = 'none';
                        // Guardar los cambios en el usuario
                        user.username = usernameInput.value;
                        user.birthdate = birthdateInput.value;
                        user.address = addressInput.value;
                        user.phone = phoneInput.value;
                        // Deshabilitar la edición de campos de entrada
                        usernameInput.setAttribute('readonly', true);
                        birthdateInput.setAttribute('readonly', true);
                        addressInput.setAttribute('readonly', true);
                        phoneInput.setAttribute('readonly', true);
                    });
        
                    // Agregar elementos al listado
                    listItem.appendChild(editButton);
                    listItem.appendChild(usernameInput);
                    listItem.appendChild(birthdateInput);
                    listItem.appendChild(addressInput);
                    listItem.appendChild(phoneInput);
                    listItem.appendChild(saveButton);
        
                    userList.appendChild(listItem);
                });
            }
        })
        .catch(error => console.error('Error al cargar la lista de usuarios: ' + error));
}

function openTab(evt, tabName) {
    if (tabName === 'usuariosTab') {
        // Muestra todos los usuarios cuando se selecciona la pestaña "Usuarios"
        loadUsers();
    } else if (tabName === 'adminTab') {
        loadUsers('admin');
    } else if (tabName === 'recepcionistaTab') {
        loadUsers('recepcionista');
    } else if (tabName === 'entrenadorTab') {
        loadUsers('entrenador');
    } else if (tabName === 'clienteTab') {
        loadUsers('cliente');
    }
    // ... Otras pestañas
}




// Llama a la función para cargar y mostrar la lista de usuarios
loadUsers();

// Función para editar un usuario
function editUser(userId) {
    // Aquí puedes implementar la lógica para editar un usuario, por ejemplo, mostrar un formulario de edición y actualizar la información en el servidor.
}
