//Task4
// Ejercicio 4: Calcular Promedio de Notas- Plataforma educativa.
//  Crea una función calcularPromedio(notas) que reciba un array de notas dado por el usuario 
// (separadas por comas)  y retorne el promedio (redondeado a 2 decimales).
const prompt = require("prompt-sync")();

let userInput = prompt("Introduzca las notas de sus alumnos (separadas por comas): ");

let userArray = userInput.split(",");

function promedioNotas(array){
    let sumaNotas = 0;
    for (let i = 0; i < array.length; i++){
        sumaNotas = sumaNotas + parseFloat(array[i])
    };

    let promedio = sumaNotas / array.length;
    
    return promedio.toFixed(2)
}

console.log("El promedio de las notas es:", promedioNotas(userArray))