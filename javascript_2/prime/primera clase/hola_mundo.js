console.log("hola mundo");

class person{

 constructor(nombre,edad){
   this.nombre=nombre
   this.edad=edad
 }

 accionn(){
    console.log(`el nombre ${this.nombre} edad ${this.edad}`);
 }


}
const p = new person("daniels",14)

//libreria de apoyo



let a ="5"
console.log(typeof a)
a=Number();
console.log(typeof a)