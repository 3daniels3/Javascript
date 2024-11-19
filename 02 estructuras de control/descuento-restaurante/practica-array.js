let pares = [];
let impar = [];
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numero_random = 0;

for (let n of array) {
  numero_random = parseInt(Math.random() * 100);

  let r = numero_random * n;
  

  if(r % 2 ===0){
    console.log(`${n} x ${numero_random} = ${r} ES PAR`)
    
    pares.push(r);

  }else{
    console.log(`${n} x ${numero_random} = ${r} ES IMPAR`)
    
    impar.push(r);
  }


}

console.log(`Array de pares:  ${pares}`);

console.log(`Array de impares: ${impar}`);

