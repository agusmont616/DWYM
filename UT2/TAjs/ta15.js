const texto = document.getElementById("texto");
const botonAniadir = document.getElementById("botonAniadir");
const botonLimpiar = document.getElementById("botonLimpiar");
const lista = document.getElementById("lista");

botonAniadir.addEventListener("click", () => {

    if (texto.value  !== ""){
        const elemento = document.createElement("li");
        elemento.textContent = texto.value;
        lista.appendChild(elemento);
        texto.value = "";  
    }
    
});

botonLimpiar.addEventListener("click", () => {

         lista.innerHTML = "";
    
});