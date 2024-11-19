
//entrada de datos
let consumo = parseFloat(prompt('Ingrese el consumo'));

let descuento, datoDescuento;

if(consumo<=100){
    //descuento del 10%
    datoDescuento= '10%';
    descuento= consumo*0.10;
    
}else if(consumo>100 && consumo<=200){
    datoDescuento='20%';
    descuento=consumo*0.20;
}else if(consumo>200){
    datoDescuento = '30%'
    descuento= consumo*0.30;

}

let montoDescuento= consumo - descuento;
let IGV = montoDescuento*0.19;
let total_pagar = montoDescuento+IGV;

//salida de datos


document.write(`<pre> 
consumo :            ${consumo}
descuento:           ${descuento}            |${datoDescuento}
Monto con descuento: ${montoDescuento}
impuesto:            ${IGV}                |19%  
Total a pagar:       ${total_pagar}
</pre>`);




