class persona {
    #nombre;
    #edad;

    constructor (nombre,edad){
        this.#nombre = nombre
        this.#edad= edad
    }

    getEdad (){
        return this.#edad
    }
    setEdad(nuevaedad){
        this.#edad = nuevaedad
      
    }
  
}

const persona_2 =new persona("juan",22) // instanciamos
// traemos los atributos provados con la funcion getter
console.log(persona_2.getEdad()) 
// cambiamos los atributos con la funcion setter que usa un parametro igual al atributo privado
persona_2.setEdad(12)
// lo traemis denuevo para ver el resultado
console.log(persona_2.getEdad())
