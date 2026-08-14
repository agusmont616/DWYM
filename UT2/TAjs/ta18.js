const texto = document.getElementById("texto");
const lista = document.getElementById("lista");
const items = lista.querySelectorAll("li");

texto.addEventListener("input", () => {
    const busqueda = texto.value.toLowerCase();

    items.forEach((item) => {
        if (item.textContent.toLowerCase().includes(busqueda)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
});

