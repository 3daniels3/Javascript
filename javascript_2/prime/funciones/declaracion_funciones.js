//que son las funciones, como se declara  y como se utiliza
function saluar(param1, param2) {

    console.log(`hola ${param1} y ${param2}`)

}

saluar("juan", "pedro")


function despedir(nombre) {
    console.log(`adios ${nombre}`)
}

// con objetos

const persona = { nombre: "daniel", apellido: "sanchez" }
imprimir(persona)

function imprimir(param) {
    console.log(`hola señor ${param.nombre} ${param.apellido}`)
}

/// con parametros como arrays

n = imprimeNumeros(1, 4, "hola", { nombre: "pablo" })
function imprimeNumeros(...nums) {
    console.log(nums)
    return nums

}
console.log(n)


/// funcion para multiplicar
res = multiplicar(4, 7)
function multiplicar(a = 0, b = 0) {
    console.log(a * b);


    return a * b;


}

console.log(res)


