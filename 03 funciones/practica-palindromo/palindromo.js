const palindromo = (palabra) =>{
    
    palabra = palabra.replace(' ','');

    palabra= palabra.toLowerCase();
    
    let palabraInvertida = palabra.split('').reverse().join('');

    if(palabra===palabraInvertida){
     return true;
    }else{
        return false;
    }
   
}

let palabra = prompt('ingrese una palabra');
let espalindromo= palindromo(palabra);

if(espalindromo){
    document.write('es palindromo');
}else{
    document.write('no es palindromo');
}
console.log(espalindromo);