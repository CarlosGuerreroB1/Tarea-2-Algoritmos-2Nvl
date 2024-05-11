//Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. 
//Si el año de fabricación está entre el 2020 y 2023, aplicar un descuento del 5% sobre 
//el precio de venta. mostrar el precio final incluyendo el 15% del IVA. 
const read = require('prompt-sync')(); 
const write = console.log 
// Entrada: Leer el precio de venta de un vehículo nuevo (precioVenta) y su año de fabricación (anioFabricacion)
// Proceso: Si el año de fabricación está entre el 2020 y 2023, aplicar un descuento del 5% sobre el precio de venta. Luego, calcular el precio final incluyendo el 15% del IVA.
// Salida: Imprimir el precio final

// se crea la funcion
function calcularPrecioFinal() { 
    // Inicializar las variables
    let precioVenta = 0, anioFabricacion = 0;
    
    // Leer el precio de venta del vehículo nuevo y su año de fabricación
    precioVenta = +read("Ingrese el precio de venta del vehículo nuevo: "); 
    anioFabricacion = +read("Ingrese el año de fabricación del vehículo: "); 
 
    // Si el año de fabricación está entre el 2020 y 2023, aplicar un descuento del 5% sobre el precio de venta
    if (anioFabricacion >= 2020 && anioFabricacion <= 2023) {
       let descuento = precioVenta * 0.05;
       precioVenta -= descuento;
       write("Se aplicó un descuento de 5%: " + descuento); 
    } else {
       write("No se aplica ningún descuento."); 
    }
 
    // Calcular el precio final incluyendo el 15% del IVA
    let precioFinal = precioVenta * 1.15;
 
    // Imprimir el precio final
    write("El precio final después de aplicar el descuento y el IVA es: " + precioFinal); 
 }
 
 calcularPrecioFinal();