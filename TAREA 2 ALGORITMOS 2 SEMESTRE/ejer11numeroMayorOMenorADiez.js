//11.Pedir al usuario un número y mostrar si es mayor o menor que 10.
// Entrada: Leer un número (num)
// Proceso: Determinar si num es mayor o menor que 10
// Salida: Imprimir si num es mayor o menor que 10
const read = require('prompt-sync')(); 
const write = console.log 
function compararConDiez() { 
    // Inicializar la variable
    let num = 0;
    
    // Leer el número
    num = +read("Ingrese un número: "); 
 
    // Determinar si num es mayor o menor que 10
    if (num > 10) {
       write("El número es mayor que 10."); 
    } else if (num < 10) {
       write("El número es menor que 10."); 
    } else {
       write("El número es igual a 10."); 
    }
 }
 
 compararConDiez();
 