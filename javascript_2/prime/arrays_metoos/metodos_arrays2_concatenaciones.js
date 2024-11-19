let list = [1,"hola",true,2]
let list2= [3,"adios",false,4]

console.log(list.concat(list2))

//Otra manera de concatenar
list3 = [...list,...list2]
console.log(list3)