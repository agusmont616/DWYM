function removeFromArray(arreglo, item) {
    const indice = arreglo.indexOf(item);
    if (indice !== -1) {
        arreglo.splice(indice, 1);
        console.log(arreglo);
    } else {
        console.log("El item no está en el arreglo.");
    }
}

const arreglo = [1, 2, 3, 4];

removeFromArray(arreglo, 2);