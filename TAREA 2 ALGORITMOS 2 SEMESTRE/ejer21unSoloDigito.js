//21. Solicitar al usuario un número y mostrar si es un número de un solo dígito. 
// Entrada: Leer un número (num)
// Proceso: Determinar si num es un número de un solo dígito
// Salida: Imprimir si num es un número de un solo dígito
const read = require('prompt-sync')(); 
const write = console.log 

function determinarDigito() { 
    // Inicializar la variable
    let num = 0;
    
    // Leer el número
    num = +read("Ingrese un número: "); 
 
    // Determinar si num es un número de un solo dígito
    if (num >= 0 && num < 10) {
       write("El número es un número de un solo dígito."); 
    } else {
       write("El número no es un número de un solo dígito."); 
    }
 }
 
 determinarDigito();
 