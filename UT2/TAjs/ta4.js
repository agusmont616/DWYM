function sumAll(a, b) {
    let suma = 0;

    while (a <= b){
        suma += a;
        a += 1;
    }

    console.log(suma);
}

sumAll(2, 5);