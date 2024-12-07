// Selección de elementos del DOM
const form = document.querySelector('form');
const usernameInput = document.querySelector('.username input');
const passwordInput = document.querySelector('.contrasena input');
const submitButton = document.querySelector('input[type="submit"]');
const recordarLink = document.querySelector('.recordar');
const registrarseLink = document.querySelector('.registrarse a');

// Verificar si el usuario tiene datos guardados al cargar la página
window.addEventListener('load', () => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
        usernameInput.value = savedUser;  // Pre-llenar el campo con el nombre guardado
    }
});

// Evento de submit para iniciar sesión
form.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevenir el envío del formulario por defecto

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validación de campos
    if (!username || !password) {
        alert('Por favor, ingrese tanto el nombre de usuario como la contraseña.');
        return;
    }

    // Obtener los datos almacenados en localStorage (simulación de inicio de sesión)
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
        const userData = JSON.parse(savedUserData);

        // Verificar las credenciales
        if (userData.username === username && userData.password === password) {
            alert('Inicio de sesión exitoso');
            window.location.href = "tienda.html";  // Redirigir a la página de tienda
        } else {
            alert('Credenciales incorrectas. Por favor, intente de nuevo.');
        }
    } else {
        alert('No se han encontrado datos de usuario. Por favor, regístrese.');
    }
});

// Evento para recordar el nombre de usuario
recordarLink.addEventListener('click', (e) => {
    e.preventDefault();
    
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
        alert(`El nombre de usuario guardado es: ${savedUser}`);
    } else {
        alert('No se ha guardado ningún nombre de usuario.');
    }
});

// Evento para manejar el almacenamiento del nombre de usuario (si se desea recordar)
usernameInput.addEventListener('blur', () => {
    const username = usernameInput.value.trim();
    if (username) {
        localStorage.setItem('username', username);  // Guardar el nombre de usuario
    }
});

// Función para eliminar los datos de localStorage tras el cierre de sesión
function clearStorage() {
    localStorage.removeItem('userData');
    localStorage.removeItem('username');
    alert('Datos eliminados de la memoria local.');
}

// Evento para el cierre de sesión (agregar un enlace o un botón para esta acción)
document.querySelector('#logout').addEventListener('click', () => {
    clearStorage();  // Llamar a la función de eliminación de datos
    window.location.href = "index.html";  // Redirigir a la página de inicio de sesión
});

// Simulación de registro (puedes adaptar esta parte al flujo de tu aplicación)
registrarseLink.addEventListener('click', (e) => {
    e.preventDefault();
    
    const username = prompt('Ingrese un nombre de usuario:');
    const password = prompt('Ingrese una contraseña:');

    if (username && password) {
        const userData = {
            username: username,
            password: password
        };

        // Guardar el nuevo usuario en localStorage como JSON
        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Registro exitoso. Ahora puede iniciar sesión.');
    } else {
        alert('Ambos campos son requeridos para el registro.');
    }
});