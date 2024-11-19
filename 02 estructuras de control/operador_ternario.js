// let n = 10;

// let mensaje = (n > 15) ? n +'es mayor que 15' : ' es menor que 15';

// console.log(mensaje);

let v = 'o';


let r = (v==='a'||v==='A') ? `${v} es vocal`
        :(v==='e'||v==='E') ? `${v} es vocal`
        :(v==='i'||v==='I') ? `${v} es vocal`
        :(v==='o'||v==='O') ? `${v} es vocal`
        :(v==='u'||v==='U') ? `${v} es vocal`
        : `${v} no es vocal `;

console.log(r);