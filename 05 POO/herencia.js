class Persona {
    Nombre;
    edad;

    constructor (Nombre,edad) {
        this.Nombre = Nombre;
        this.edad = edad;
    }

    imprimir(){
        console.log(`Nombre:${this.Nombre}\nEdad: ${this.edad}`);
    }
}

//creando clase que heredara atributos, metodos y constructores de personas

 class empleados extends Persona { // dice que es una herencia de persona o extension
   sueldo;

   constructor(Nombre,edad,sueldo){
    super(Nombre,edad)            // super los trae
    this.sueldo= sueldo;
   }

   detalleempleado(){
    super.imprimir();     // trae el mensaje de persona y abajo le concatena otro con un console.log
    console.log(`sueldo: ${this.sueldo}`)
   }

 }

 const em = new empleados('roel',25,1000);

 console.log(em);
 em.detalleempleado();
 