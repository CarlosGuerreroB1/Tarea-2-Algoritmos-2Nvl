//13.Pedir al usuario un número y mostrar si es par o impar.  
// Entrada: Leer un número (num)
// Proceso: Determinar si num es par o impar
// Salida: Imprimir si num es par o impar
const read = require('prompt-sync')(); 
const write = console.log 
function determinarParidad() { 
    // Inicializar la variable
    let num = 0;
    
    // Leer el número
    num = +read("Ingrese un número: "); 
 
    // Determinar si num es par o impar
    if (num % 2 == 0) {
       write("El número es par."); 
    } else {
       write("El número es impar."); 
    }
 }
 
 determinarParidad();
 