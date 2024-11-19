const esprimo = (numero) => {
  let contador = 0;

  let numeros = [];

  for (i = 0; i < numero; i++) {
    numeros.push(i + 1);
  }
  for (let n of numeros) {
    if (n === 1 || n === numero) {
      continue;
    }

    if (numero % n === 0) {
      contador++;
    }
  }
 
  return contador===0;

  
}

numero = Number(prompt('ingrese un numero para ver si es primo'));
if(esprimo(numero)){
    document.write(`${numero} es primo`)
}else{
    document.write(`${numero} es No es primo`)
}


console.log(esprimo(5));
