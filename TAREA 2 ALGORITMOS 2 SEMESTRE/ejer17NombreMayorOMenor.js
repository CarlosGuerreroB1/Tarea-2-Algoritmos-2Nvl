//17.Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el 
//segundo o menor que el segundo 
// Entrada: Leer dos nombres (nombre1, nombre2)
// Proceso: Determinar si nombre1 y nombre2 son iguales, o si nombre1 es mayor o menor que nombre2
// Salida: Imprimir si nombre1 y nombre2 son iguales, o si nombre1 es mayor o menor que nombre2
const read = require('prompt-sync')(); 
const write = console.log 
function compararNombres() { 
    // Inicializar las variables
    let nombre1 = "", nombre2 = "";
    
    // Leer los dos nombres
    nombre1 = read("Ingrese el primer nombre: "); 
    nombre2 = read("Ingrese el segundo nombre: "); 
 
    // Determinar si nombre1 y nombre2 son iguales, o si nombre1 es mayor o menor que nombre2
    if (nombre1 == nombre2) {
       write("Los nombres son iguales."); 
    } else if (nombre1 > nombre2) {
       write("El primer nombre es mayor que el segundo."); 
    } else {
       write("El primer nombre es menor que el segundo."); 
    }
 }
 
 compararNombres();
 