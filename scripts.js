// Simulación de una base de datos de usuarios

// Realiza una solicitud para cargar la base de datos de usuarios
fetch('usuarios.json')
    .then(response => response.json())
    .then(data => {
        // Una vez que los datos se carguen con éxito, puedes utilizarlos para la autenticación
        const users = data.users;

        // Agregar un evento de envío del formulario
        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Lógica de autenticación
            handleAuthentication(username, password, users);
        });

        // Lógica de autenticación
        function handleAuthentication(username, password, users) {
            // Busca el usuario en la base de datos
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                // Usuario autenticado
                if (user.role === 'admin') {
                    alert('Bienvenido, administrador.');
                    // Redirige al usuario a la página del administrador
                    window.location.href = 'admin.html';
                } else if (user.role === 'user') {
                    alert('Bienvenido, usuario.');
                    // Redirige al usuario a su página de usuario
                    window.location.href = 'user-rutinas.html';
                } else if (user.role === 'trainner') {
                    alert('Bienvenido, entrenador.');
                    // Redirige al usuario a su página de usuario
                    window.location.href = 'entrenador.html';
                }
            } else {
                alert('Autenticación fallida. Verifica tus credenciales.');
            }
        }
    })
    .catch(error => console.error('Error al cargar la base de datos de usuarios: ' + error));


// Función para mostrar el contenido de precios de membresía para usuarios regulares
function showUserContent() {
    preciosSection.innerHTML = `
        <h2>Precios de Membresía</h2>
        <ul>
            <li>Membresía Mensual: $50</li>
            <li>Membresía Trimestral: $120</li>
            <li>Membresía Anual: $400</li>
        </ul>
    `;
}
// Función para manejar el registro de nuevos usuarios
function handleRegistration() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Verifica si el nombre de usuario ya existe en la simulación de la base de datos
    const existingUser = usersDatabase.find(user => user.username === newUsername);

    if (existingUser) {
        alert('El nombre de usuario ya está en uso. Elige otro.');
    } else {
        // Agrega el nuevo usuario a la base de datos
        usersDatabase.push({ username: newUsername, password: newPassword, role: 'user' });
        alert('Registro exitoso. Ahora puedes iniciar sesión con tu nueva cuenta.');
    }
}

// Agregar un evento de envío del formulario de registro
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    handleRegistration();
});
