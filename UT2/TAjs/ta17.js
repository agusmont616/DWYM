const boton = document.getElementById("+");
const contador = document.getElementById("contador");
let num = parseInt(contador.textContent, 10);

boton.addEventListener("click", () => {
    num++;
    contador.textContent = num;

})