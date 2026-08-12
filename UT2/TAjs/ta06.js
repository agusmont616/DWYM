function convertToCelsius(f) {
    const resultado = (f - 32) * 5/9;
    console.log(resultado.toFixed(1));
}

function convertToFarenheit(c) {
    const resultado = (c * 9/5) + 32;
   console.log(resultado.toFixed(1));
}

convertToCelsius(100);
convertToFarenheit(37.8);