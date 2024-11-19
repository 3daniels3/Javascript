//atributos y metodos privados
//uso de atributos privados
class Persona {
    #nombre
    #edad

    constructor(nombre, edad) {
        this.#nombre = nombre  // al usar this hacemos referencia al objeto en el cual esta ahora mismo
        this.#edad = edad

    }

    saludo() {
        console.log(`hola ${this.nombre}`)
    }
    //funcion creada para poder mostrar los datos privados
    obtenerNombre() {
        return `${this.#nombre} con edad ${this.#edad}`
    }

}
const persona = new Persona("daniels", 30)
console.log(persona.obtenerNombre())



