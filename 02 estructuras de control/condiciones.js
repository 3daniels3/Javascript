//condiciones anidadas

let n = 78, print = "";

if (n != 0) {
  if (n > 0) {
    if (n % 2 === 0) {
      print = `El numero que ${n} es par`;
    } else {
      print = `el numero ${n} es Impar`;
    }
  } else {
    if (n % 2 === 0) {
      print = `El numero que ${n} es par negativo`;
    } else {
      print = `el numero ${n} es Impar negativo`;
    }
  }
}    else {
  print = `el numero no es neutro`;
}

console.log(print);
