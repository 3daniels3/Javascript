//modularizacion

 export const suma =(a,b)=>{
    return a+b;
}
export const multiplicar=(a,b)=>{
    return a*b;
}
export const elevada = (a,b)=>{
    return a**b
}

export const factorial= (a)=>{
 // factorial de 5: 5*4*3*2*1
 let factorial= 1

 for (let i = 2; i <= a; i++) {
    factorial*=i

    
 }
 return factorial
}

export const nombre ="daniel" // puedes exportar constantes :o

