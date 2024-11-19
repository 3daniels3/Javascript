class Persona {
    #Nombre;
    #edad;

    constructor (Nombre,edad) {
        this.#Nombre = Nombre;
        this.#edad = edad;
    }

    set setnombre(Nombre_nuevo){
        this.#Nombre = Nombre_nuevo;
    }

    get getnombre(){
        return this.#Nombre
    }

    set setedad(edad_nueva){
        this.#edad = edad_nueva;
    }

    get getedad(){
        return this.#edad
    }

} 

const p1 = new Persona('daniel',21);

console.log(p1)

console.log(p1.getedad)