// trabajando con onjetos
const obj = {
    id: 4,
    nombre: "Daniels",
    apellido: "Sanchez",
    developer: true,
    libros_favoritos: ["la metamorfisis", "guerra mundial z"]
}
console.log(obj)
const prop = "developer" // accedemos a propiedades atravez de variables
console.log(obj[prop])

obj2 = obj

obj2.nombre = "pedro"
console.log(obj2.nombre)
//como ocupan la misma posicion en memoria se cambia en ambos objetos
console.log(obj.nombre)

obj3 = { ...obj2 } // esta es la manera de copiar un objeto para no cambiar datos y ocupar espacio en memoria diferente
obj3.nombre = "juancho"
console.log(obj2.nombre)
console.log(obj3.nombre)


//ordenando lista de objetos con una propiedad

const lista_peliculas = [

]