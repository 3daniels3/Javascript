function factorial(n) {

    // console.log(n);
    if (n>1) {

        n= n*factorial(n-1);

        
         console.log(n);// lo de arriba procedo de multiplicacion 2,6,24,120
    
    }
    return n;
}

console.log(factorial(5)); //5*4*3*2*1=120