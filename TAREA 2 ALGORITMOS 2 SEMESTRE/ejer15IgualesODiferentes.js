//15Pedir al usuario dos números y mostrar si son iguales o diferentes.  
// Entrada: Leer dos números (num1, num2)
// Proceso: Determinar si num1 y num2 son iguales o diferentes
// Salida: Imprimir si num1 y num2 son iguales o diferentes

// se crea la funcion
const read = require('prompt-sync')(); 
const write = console.log 
function compararNumeros() { 
    // Inicializar las variables
    let num1 = 0, num2 = 0;
    
    // Leer los dos números
    num1 = +read("Ingrese el primer número: "); 
    num2 = +read("Ingrese el segundo número: "); 
 
    // Determinar si num1 y num2 son iguales o diferentes
    if (num1 == num2) {
       write("Los números son iguales."); 
    } else {
       write("Los números son diferentes."); 
    }
 }
 
 compararNumeros();
 