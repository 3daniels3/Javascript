function argumentos(...args) {
   let suma = 0;
    for(let i of args){
     
        suma+=i;

      
    }
    return suma;
}
let s = argumentos(10,10);
console.log(s);
