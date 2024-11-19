//herencia
import persona from "./instanciacion-clases.js";

class desarrollador extends persona {
  constructor(nombre, edad,isdev, lenguaje){
    super(nombre,edad,isdev)
    this.lenguaje = lenguaje
  }
// polimorfismo
  saludo(){
    console.log(`soy ${this.nombre} y me gusta ${this.lenguaje}`)
  }
}
const desarrollador_2 = new desarrollador("juan",22,true,"java")

desarrollador_2.saludo()



