function esBisciesto(anio) {
    console.log(anio % 4 === 0 || (anio % 100 === 0 && anio % 400 === 0))
}

esBisciesto(2012); // true
esBisciesto(2013); // false
