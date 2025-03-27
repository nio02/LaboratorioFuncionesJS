// Task 8
// Ejercicio 8: Cambio de Moneda-App de viajes.
// Crea una función convertirMoneda(monto, monedaDestino) que convierta de pesos a USD o EUR,
// pedir al usuario monto en COP y la moneda con la que desea hacer la converción.
const prompt = require("prompt-sync")();

let montoUsuario = Number(prompt("Introduzca el monto a convertir: "))
let monedaUsuario = prompt("Escriba la moneda a la cual desea convertir su monto (EUR o USD): ").toLowerCase()

function convertirMoneda(monto, monedaDestino){
    if (monedaDestino == "usd"){
        return `Su conversion equivale a ${(monto / 4124).toFixed(3)} USD`
    } else if(monedaDestino == "eur"){
        return `Su conversion equivale a ${(monto / 4453).toFixed(3)} EUR`
    }
}

console.log(convertirMoneda(montoUsuario, monedaUsuario))