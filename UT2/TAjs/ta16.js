const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("boton");
const texto = parrafo.textContent;

boton.addEventListener("click", () => {
    if (boton.textContent === "Ocultar") {
        boton.textContent = "Mostrar";
        parrafo.textContent = "";

    } else {
        boton.textContent = "Ocultar";
        parrafo.textContent = texto;
    }
})