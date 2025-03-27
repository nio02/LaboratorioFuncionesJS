//Task2
// Ejercicio 2: Validar Contraseña- Formulario de registro.
// Crea una función validarContraseña(contraseña) que retorne true si:
// - Tiene al menos 8 caracteres.
// - Incluye un número.
// - Incluye una mayúscula.
const prompt = require("prompt-sync")();

let passwordUser = prompt("Ingrese su contraseña: ")

function validarContraseña(string){
    const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let tieneNumero = false;
    
    for (let i = 0; i < string.length; i++){
        if (numeros.includes(string[i])){
            tieneNumero = true
        }
    };
    
    if (string.length >= 8 && string.toLowerCase() != string && tieneNumero == true){
        return true;
    } else{
        return false;
    }
}

console.log(validarContraseña(passwordUser))