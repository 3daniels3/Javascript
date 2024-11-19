//iterar los valores de una variable

//forma antigua
const array = ["hola", 2, 1, 98, false]
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

//forma moderna con js version 6
array.forEach(valor => {
    console.log(valor)
})



const frutas = ['manzana', 'banana', 'cereza'];

frutas.forEach((fruta, index) => {
    console.log(`${index + 1}: ${fruta}`);
});


let suma = 0;
const numbers = [3, 6, 9, 77, 2, 3, 93, 19]

numbers.forEach(valor => {
    suma += valor;
    console.log(valor)

})
console.log(suma)


//busqueda de un valor  dentro de una lista

const ListaObjetos = [
    { nombre: "Daniel", Edad: 22 },
    { nombre: "juan", Edad: 24 },
    { nombre: "miguel", Edad: 21 },
    { nombre: "lucia", Edad: 25 }
];
//
// const objeto=ListaObjetos.find(o =>{
//     if(o.nombre==="juan"){
//         return true;
//     }
// })

// console.log(objeto)


const objeto = ListaObjetos.find(o => {
    return o.nombre === "juan"
})

console.log(objeto.Edad)

