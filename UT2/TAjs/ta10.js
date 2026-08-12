function getSum(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }

    console.log(suma);
}

const arreglo = [1, 2, 3];

getSum(arreglo);