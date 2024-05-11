//23.Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. 
//Calcular y mostrar el precio final luego de aplicar el descuento siempre cuando el 
//precio sea mayor $100.  
const read = require('prompt-sync')(); 
const write = console.log 
// Entrada: Leer el precio de un producto (precio) y el porcentaje de descuento (descuento)
// Proceso: Calcular y mostrar el precio final luego de aplicar el descuento siempre cuando el precio sea mayor a $100
// Salida: Imprimir el precio final luego de aplicar el descuento


function calcularPrecioFinal() { 
    // Inicializar las variables
    let precio = 0, descuento = 0;
    
    // Leer el precio del producto y el porcentaje de descuento
    precio = +read("Ingrese el precio del producto: "); 
    descuento = +read("Ingrese el porcentaje de descuento que se aplicará: "); 
 
    // Calcular y mostrar el precio final luego de aplicar el descuento siempre cuando el precio sea mayor a $100
    if (precio > 100) {
       let precioFinal = precio - (precio * (descuento / 100));
       write("El precio final después de aplicar el descuento es: " + precioFinal); 
    } else {
       write("El precio del producto ", precio, " no es mayor a $100, por lo tanto, no se aplica el descuento."); 
    }
 }
 
 calcularPrecioFinal();
 