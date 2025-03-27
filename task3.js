//Task3
// Ejercicio 3: Buscar Producto en Inventario- Sistema de gestión de inventario.
// Crea una función buscarProducto(nombre, inventario) que retorne el producto si existe, o null si no. El 
// inventario debería estar PREDEFINIDO
const prompt = require("prompt-sync")();

const inventario = [
    {"nombre": "Camisa","Precio": 50},
    {"nombre": "Zapato", "Precio": 120},
    {"nombre": "Gorra", "Precio": 20}
];

let userSearch = prompt("Introduzca el producto que quiere buscar: ")

function buscarProducto(nombre, inventario){
    let searchResult;

    for (let i = 0; i < inventario.length; i++){
        if (inventario[i]["nombre"] == nombre){
            searchResult = inventario[i]
        }
    };
    
    if (searchResult != undefined){
        return searchResult
    } else {
        return null
    };

};

console.log(buscarProducto(userSearch, inventario))