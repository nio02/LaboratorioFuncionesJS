// Task 7
// Ejercicio 7: Simulador de Cajero Automático-App bancaria.
// Crea una función retirarDinero(saldo, monto) que:
// Pide al usuario su saldo actual y el monto a retirar.
// Muestra el nuevo saldo o "Fondos insuficientes".
const prompt = require("prompt-sync")();

let saldoUsuario = Number(prompt("Introduzca su saldo actual: "));
let montoUsuario = Number(prompt("Introduzca el monto que quiere retirar: "));

function retirarDinero(saldo, monto){
    let nuevoSaldo = 0;
    if (saldo >= monto){
        return `Su nuevo saldo es: ${nuevoSaldo = saldo - monto}`
    } else {
        return `Fondos Insuficientes`
    }
};

console.log(retirarDinero(saldoUsuario, montoUsuario))