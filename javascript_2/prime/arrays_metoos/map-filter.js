//trabajar con metodos avanzados
//.map()  .filter() .reduce()

const array = ["monteria", "chinu", "sincelejo", "sahagun"];

array.forEach(valor => {
    console.log(valor)
})

nuevoarray = array.map((valor, indice) => {
    indice++
    return (`${indice} - ${valor}`)
})
console.log(nuevoarray)


const ListaObjetos = [
    { nombre: "Daniel", Edad: 22 },
    { nombre: "juan", Edad: 24 },
    { nombre: "miguel", Edad: 21 },
    { nombre: "lucia", Edad: 25 }
];
// const personasmayores= ListaObjetos.filter(Obj=>{
//   if (Obj.Edad>23) {
//     return Obj.Edad
//   }else{
//    return  false
//   }
// })
// console.log(personasmayores)

//lo mismo pero con funcion flecha
const personasmayor = ListaObjetos.filter(obje => obje.Edad > 23)
console.log(personasmayor)
const nuevalista = ListaObjetos.filter(obj => obj.nombre !== "miguel")
console.log(nuevalista)