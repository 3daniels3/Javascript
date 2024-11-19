let parvalor_venta = 0,
  IGV = 0,
  precio_venta = 0;

valor_venta = parseFloat(prompt("Digita el valor del prodcuto"));

IGV = valor_venta * 0.19;
precio_venta = IGV + valor_venta;

// document.write('precio de la venta final : '+ precio_venta + '<br>');
// document.write('valor de venta: '+ IGV + '<br>');
// document.write('valor de venta: '+ valor_venta+ '<br>');

document.write(`valor de venta: ${valor_venta} <br>
                IGV ${IGV} <br>
                precio de venta ${precio_venta}
                 `);

console.log(`valor de venta: ${valor_venta} \n IGV ${IGV} \n precio de venta ${precio_venta}`);


let number = '23.0';
let dato = parseFloat(number);
console.log(dato)