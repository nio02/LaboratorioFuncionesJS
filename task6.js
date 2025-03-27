//Task 6
// Ejercicio 6: Contador de Palabras-Editor de texto.
//  Crea una función contarPalabras(texto) que retorne el número de palabras en un string (separadas por 
// espacios).
const prompt = require("prompt-sync")();

let userString = prompt("Introduzca una frase: ");

function contarPalabras(string){
    let cadenaSeparada = string.split(" ")
    let palabras = [];
    for (let i = 0; i < cadenaSeparada.length; i++){
        if (cadenaSeparada[i] != ""){
            palabras.push(cadenaSeparada[i])
        }
    }
    console.log(`Su frase tiene ${palabras.length} palabras.`)
};

contarPalabras(userString)





