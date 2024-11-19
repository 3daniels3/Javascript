//funciones asincronas

async function f() {
  // se usan generalmente para esperar que se ejecute una accion
}

const obtener = async () => {

}

let pelis = [
    {
        id: 1,
        Nombre: "Scary movie",
        Genero: "Comedia"
    },
    {
        id: 2,
        Nombre: "Avengers",
        Genero: "accion"
    },
    {
        id: 3,
        Nombre: "Amores que matan",
        Genero: "Romance"
    }
    

];

// function mostrar(){
//     return new Promise(( resolve, reject) =>{
//         if ( n === 1) {
//             setTimeout(() => {
//                 resolve(pelis)
//             },1500);
//         }else{
//            reject(  new Error("no se cumplio el if"))
//         }
        
//     })
    
     
// }

// mostrar()
// .then((pelis)=>console.log(pelis))
// .catch((err)=>{
//     console.log(err.message)
// })


const promesa = new Promise((resolve,reject)=>{
    const i = Math.floor(Math.random()*2)
    if (i!==0) {
        resolve() // seria equivalente a return
        
    }else{
        reject()
    }
})

promesa
.then(()=>console.log("se esta ejeutando de forma correcta"))
.catch(()=>console.log("error"))   
.finally(()=>console.log("siemore ejecutandose"))        
