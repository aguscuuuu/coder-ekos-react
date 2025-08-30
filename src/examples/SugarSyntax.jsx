// destructuring de objetos ___________________________________________________________________________

const persona = {
    name: "Agustin",
    age: 25,
    country: "Argentina"
}
const nombre = persona.name;                // <--- 
const {name, age, country} = persona;       // <--- destructuring

// destructuring de arrays ____________________________________________________________________________

const colors = ["red", "green", "blue"];

console.log(colors[0]);                     // <--- 
const [primero, segundo] = colors;          // <--- destructuring

// desestructuring con spread operator ________________________________________________________________

const numeros = [1,2,3,4,5];

const numeros2 = numeros.concat(6,7,8);     // <---
const numeros3 = [...numeros, 6,7,8];       // <--- destructuring

// desestructuring con operador ternario ______________________________________________________________

let mensaje;

if(edad>=18){
    const mensaje = "Es mayor de edad";
}else{
    const mensaje = "Es menor de edad";
}

const mensaje2 = edad >= 18 ? "Es mayor de edad" : "Es menor de edad"; // <--- operador ternario

// desestructuring con arrow function _________________________________________________________________

function sumar(a, b){
    return a + b;
}

const arrowSumar = (a,b) => a + b // <--- arrow function