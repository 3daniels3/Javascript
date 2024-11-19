class Persona {
    

    constructor (Nombre,edad) {
        this.Nombre = Nombre;
        this.edad = edad;
    }

    imprimir(){
        console.log(`${this.Nombre} ${this.edad}`);
    }
}

 const p1 = new Persona('alex',(22+56));
 

 console.log(p1); //llamamos todo el objeto
 p1.imprimir() // llamamos el metodo
 console.log(p1.Nombre) // llamamos el atributo nombre del objeto