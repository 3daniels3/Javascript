

// function saludar(nombre){
//      //console.log('hola desde la funcion')
//      console.log(`Hola ${nombre} desde la funcionsaludar`)
// }
// saludar('miguel');


//funciones con return

// function saludar(nombre){

//      // console.log(`Hola ${nombre} desde la funcionsaludar`)
//      return `Hola ${nombre} desde la funcion saludar`;
// }

// const s = saludar('alex el capo');
// const a = saludar('juan el pinga doble');
// console.log(s);
// console.log(a);

//sumar con valores predeterminados

function sumar(a=null,b=null) {

     if(a===null||b==null){
          console.log('no se pudo hacer la suma');
          return;
        }
  return a+b
     
}
const s = sumar(40,50)
console.log(s);