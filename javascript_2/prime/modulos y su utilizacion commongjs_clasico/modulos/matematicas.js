//modularizacion

const suma =(a,b)=>{
    return a+b;
}
const multiplicar=(a,b)=>{
    return a*b;
}
const elevada = (a,b)=>{
    return a**b
}

const factorial= (a)=>{
 // factorial de 5: 5*4*3*2*1
 let factorial= 1

 for (let i = 2; i <= a; i++) {
    factorial*=i

    
 }
 return factorial
}
module.exports = {
    suma,
    factorial,
    multiplicar,
    elevada
}
