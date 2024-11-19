//.sort() -> modifica el array
// const array = [1,2,4,9,7,6,5]

// array.sort((a,b)=>{
//     if(a<b){
//     return -1
//     }else if(a>b){
//         return +1
//     }else{
//     return 0
//     }
// })
// console.log(array)


const array = [22, 4, 7, 88, 99, 1];

const nuevoarray = array.sort((a, b) => {
    if (a > b) {
        return -1
    }
})

console.log(nuevoarray)