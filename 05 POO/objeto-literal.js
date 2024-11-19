const persona = {
    Nombre: 'Alex',
    Apellido :'Roel',
    Edad : 26,

    Nombrecompleto(){
        return `${this.Nombre}  ${this.Apellido}`
    },

    trajes : ['traje01', 'traje02', 'traje03'],

    direccion: {
        zip: '08818121',
        pais: 'Colombia',
        departamento : 'Cordoba'
    }

}

console.log(persona.Edad);
console.log(persona.Nombrecompleto());
console.log(persona.trajes);
console.log(persona.direccion);


