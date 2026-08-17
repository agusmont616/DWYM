const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");


const errorNombre = document.getElementById("errorNombre");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");

function validarNombre() {
    if (nombre.value.trim() === "") {
        errorNombre.textContent = "El nombre es obligatorio";
        return false;
    }
}

function validarEmail() {

    const formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        errorEmail.textContent = "El email es obligatorio";
        return false;
    }
    if (!formato.test(email.value.trim())) {
        errorEmail.textContent = "El correo no es válido";
        return false;
    }
    errorEmail.textContent = "";
}

function validarPassword() {

    if (password.value.trim() === "") {
        errorPassword.textContent = "La contraseña es obligatoria";
        return false;
    }
    if (password.value.length() < 8) {
        errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres";
        return false;
    }
    errorPassword = "";
    return true;
}


formulario.addEventListener("submit", (evento) => {
    const okNombre = validarNombre();
    const okEmail = validarEmail();
    const okPass = validarPassword();

    if (!okNombre || !okEmail || !okPass) {
        evento.preventDefault();
    }
});