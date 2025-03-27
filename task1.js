//Task1
// Ejercicio 1: Calculadora de Propinas- Una app para calcular propinas en restaurantes. Crea una función calcularPropina(total, porcentaje) que reciba el total de la cuenta y el porcentaje de propina, y retorne el monto final a pagar (total + propina).
const prompt = require("prompt-sync")();

valorTotal = Number(prompt("Ingrese el valor total: "))
valorPropina = Number(prompt("Ingrese el porcentaje de la propina: "))

function propinaTotal(total, porcentaje){
    montoFinal = total + (total * (porcentaje)/100)
    return montoFinal
}

console.log("El total a pagar es:", propinaTotal(valorTotal, valorPropina))