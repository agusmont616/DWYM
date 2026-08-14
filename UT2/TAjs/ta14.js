const texto = document.getElementById("texto");
const boton = document.getElementById("boton");
const lista = document.getElementById("lista");

boton.addEventListener("click", () => {
    if (texto.value  !== ""){
        const elemento = document.createElement("li");
        elemento.textContent = texto.value;
        lista.appendChild(elemento);
        texto.value = "";  
    }
    
});