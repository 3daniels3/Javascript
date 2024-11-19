


//funcion para hallar area y perimetro de cuadrado

/**const value_result = document.getElementById('result')**/

const periSq=(lado)=>lado * 4;
const areaSq=(lado)=>lado * lado;

//funcion para hallar area y perimetro del triangulo
const perimTriangle = (side_1, side_2, side_3) => side_1 + side_2 + side_3;

const areaTriangle = (base, height) => (base * height) / 2;

/**
 * área, perímetro y diametro de circulo 
 * ====================================================
*/
 
const diameCircle = (radio)=>radio*2;
const perimCicle = (radio) => diameCircle(radio) * Math.PI;
const areaCircle = (radio) => (radio * radio) * Math.PI;



//console.log(periSq(4));
//console.log(areaSq(4,2));

function calculatePerimsq(){
    let inputside = document.getElementById('inputSide');// valor del imput
    let valor = Number(inputside.value); // recibir solamente el valor del imput, y en forma de numero


    const result= `El perimetro de cuadrado es: ${periSq(valor)} CM`;

    document.getElementById('result').innerText = result;


}

function calculateAreasq(){
    let inputside = document.getElementById('inputSide');// valor del imput
    let valor = Number(inputside.value); // recibir solamente el valor del imput, y en forma de numero


    const result= `El area del cuadrado es: ${areaSq(valor)} CM`;

    document.getElementById('result').innerText = result;


}

function calculatePerimTriangulo(){

let side1 = document.getElementById('side_T_1');
let side2 = document.getElementById('side_T_2');
let side3 = document.getElementById('side_T_3');

let value = parseFloat(side1.value);
let value2 = parseFloat(side2.value);
let value3 = parseFloat(side3.value);


const result = `El perimetro del triangulo es igual a ${perimTriangle(value,value2,value3)}`;

document.getElementById('result').innerText = result;

}

function calculaAreaTriangulo(){

    let base = document.getElementById('base');
    let altura = document.getElementById('altura');

    valor_base = parseFloat(base.value);
    valor_altura = parseFloat(altura.value);

   const result = `El area del Triangulo es igual a ${areaTriangle(valor_base,valor_altura)} CM`
   
   document.getElementById('result').innerText= result;
}

function diametroCircle(){
    let radio = document.getElementById('input_radio');
    valor_input_radio = parseFloat(radio.value);

    const result =`El diametro del radio es ${diameCircle(valor_input_radio)}`

    document.getElementById('result').innerText= result;
}

function perimetroCircle(){
    let radio = document.getElementById('input_radio');
    let valor_input_radio = parseFloat(radio.value);

    const mensaje = `El perimetro del circulo es igual a  ${perimCicle(valor_input_radio)}`

    document.getElementById('result').innerText= mensaje;
}

function CalcularAreaCircle(){

    let radio = document.getElementById('input_radio');
    let valor_input_radio = parseFloat(radio.value);

    const mensaje = `El Valor area del circulo es: ${areaCircle(valor_input_radio)}`

    document.getElementById('result').innerHTML= mensaje;
}