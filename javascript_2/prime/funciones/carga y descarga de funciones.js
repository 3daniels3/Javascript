
//carga y sobre carga de funciones

const guardar = () => { return `guardar` }

const eliminar = () => {
    console.log("hola desde eliminar")
    return `eliminado`
}

const saludar = () => console.log(`hola funcion ${guardar()} y funcion ${eliminar()}, los saludo desde la funcion saludar`)

saludar()