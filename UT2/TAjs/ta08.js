function findTheOldest(people) {
    let resultado = 0;
    let personaMasVieja = null;

    for (let i = 0; i < people.length; i++) {

        let actual = people[i];
        
        let edad = actual.yearOfDeath - actual.yearOfBirth;

        if (edad > resultado) {
            resultado = edad;
            personaMasVieja = actual;
        }
    }

    console.log("Persona mayor: " + personaMasVieja.name + " Edad: " + resultado);
}

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

findTheOldest(people);