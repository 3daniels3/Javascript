let array = [1,"miguel",false,2+2]
array.push("final") 
array.unshift("inicio")
console.log(array)

let array2 = [1,3,true];

array2.pop()
array2.shift()
console.log(array2)


let array3= [1,2,3,4];

array3.splice(4,0,"agregado")

console.log(array3)

array3.splice(0,1,"editando el primer numero");

console.log(array3)