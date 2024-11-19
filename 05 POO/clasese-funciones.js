function Persona(Nombre,edad){
    this.Nombre=Nombre;
    this.edad=edad;

    this.imprimir = function(){
        console.log(`${this.Nombre} ${this.edad}`);
    }
}


const p1 = new Persona('alex',26);
const p2 = new Persona('Roel',24);

console.log(p1.Nombre);
console.log(p2.Nombre);
p2.imprimir();
console.log(p1);