let persona = ['alex', 'david', 1003158555 ,21 ];
persona [3]; // muestra el que esta en el tecer indice "21", se aprecia si se coloca en console.log

persona [3]= 20; // cambio el dato del tercer indice "de 21 a 20"

persona.length; // muestra la longitud, osea 4

persona.push('pedro'); // añade un nuevo indice al final, ya no serian 4 indice sino 5

persona.unshift(200); // añade un nuevo indice al inicio de todo, queda como primero

persona.indexOf('alex'); // te dice el indice exacto de este elemento

//let indice_borrador = persona.indexOf('alex'); // creamos un dato y le damos el valor del indice de un indice ya creado

persona.splice(persona.indexOf('alex'), 3);

console.log(persona);
