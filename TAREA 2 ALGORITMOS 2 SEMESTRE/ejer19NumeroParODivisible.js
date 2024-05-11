//19. Solicitar al usuario un número y mostrar si es divisible por 2 o impar. 
// Entrada: Leer un número (num)
// Proceso: Determinar si num es divisible por 2 o impar
// Salida: Imprimir si num es divisible por 2 o impar
const read = require('prompt-sync')(); 
const write = console.log 
function determinarDivisibleoImpar() { 
    // Inicializar la variable
    let num = 0;
    
    // Leer el número
    num = +read("Ingrese un número: "); 
 
    // Determinar si num es divisible por 2 o impar
    if (num % 2 == 0) {
       write("El número es divisible por 2."); 
    } else {
       write("El número es impar."); 
    }
 }
 
 determinarDivisibleoImpar();
 