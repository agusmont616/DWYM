function getOdds(arreglo) {
    const resultado = arreglo.filter((num) => num % 2 != 0);
    console.log(resultado);
}

const arreglo = [1, 2, 3, 4, 5, 6, 7, 8];
getOdds(arreglo);