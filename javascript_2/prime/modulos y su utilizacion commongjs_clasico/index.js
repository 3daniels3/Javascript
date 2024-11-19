//modularizacion

//forma de exportar y importar modulos

//1 commonJs -require
//2 import Es6 - import

// importacion de modulos clasica
const modulomatematicas = require(`./modulos/matematicas.js`)

 console.log(modulomatematicas.elevada(4,2))
 console.log(modulomatematicas.factorial(5))
 console.log(modulomatematicas.suma(2,2))


const {suma, factorial, elevada}=require(`./modulos/matematicas.js`)

console.log(elevada(4,2))
console.log(factorial(5))
console.log(suma(2,2))


