

const persona = {
    Nombre: "daniels",
    edad:22,
    isDev: true,
    saludo: function(){
      console.log("hola")
    }

}

//funcion factory o funcion creadora
const creapersona = ( nombre,edad,isDev)=>{
    return{
        nombre,
        edad,
        isDev,
        saludo: function(){
            console.log("hola desde la funcion padre")
        }
    }
}

const nuevapersona=creapersona("jhon",24,false)
nuevapersona.saludo
console.log(nuevapersona)

