class persona {
    nombre; // puedes borrar eso si quieresm porque son variables publicas, con el constructor te lo ahorras
    edad;
    isdev;

    constructor(nombre, edad, isdev) {
        this.nombre = nombre  // al usar this hacemos referencia al objeto en el cual esta ahora mismo
        this.edad = edad
        this.isdev = isdev
    }

    saludo() {
        console.log(`hola soy ${this.nombre} tengo ${this.edad}`)
    }

}

const nuevapersona = new persona("daniel", 22, true) //instanciar

console.log(nuevapersona)
nuevapersona.saludo()


const nuevapersona_2 = new persona("juan", 40, false)
console.log(nuevapersona instanceof persona)

export default persona;