//Task 5
// Ejercicio 5: Filtrar Usuarios por Edad- Red social.
//  Dado un array de usuarios ([{ nombre: "Ana", edad: 25 }, ...]), crea una función 
// filtrarUsuarios(usuarios, edadMinima) que retorne los usuarios que cumplen con la edad mínima, la 
// cual será dada por el usuario, es decir, si el usuario escribe 18, debería decirle que personas de la lsita 
// cumplen con tener más de 18.
const prompt = require("prompt-sync")();

const usuarios = [
    {nombre: "Ana", edad: 25},
    {nombre: "Carlos", edad: 18},
    {nombre: "Dieguito", edad: 16}
];

// console.log(usuarios[1]["nombre"])

let minEdadUsuario = Number(prompt("Introduzca la edad minima: "))

function filtrarUsuarios(array, edadMinima){
    let usuariosEncontrados = [];

    for (let i = 0; i < array.length; i++){
        if (array[i]["edad"] >= edadMinima){
            usuariosEncontrados.push(array[i]["nombre"])
        }
    }

    return usuariosEncontrados;
};

console.log(`Los usuarios que cumplen con la mayoria de edad son: ${filtrarUsuarios(usuarios, minEdadUsuario)}`);
