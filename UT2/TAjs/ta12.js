const caracteres = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",

  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",

  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",

  "!", "#", "$", "%", "&", "(", ")", "*", "+", ",",
  "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[",
  "]", "^", "_", "{", "|", "}", "~"
];

function generatePassword(largo) {
    const caracteresElegidos = [];

    for (let i = 0; i < largo; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        let elemento = caracteres[indice];
        caracteresElegidos.push(elemento)
    }
    const password = caracteresElegidos.join("");

    console.log(password);
}

generatePassword(8);