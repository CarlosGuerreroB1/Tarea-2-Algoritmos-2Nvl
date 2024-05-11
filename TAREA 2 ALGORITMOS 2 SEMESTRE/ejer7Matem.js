//7. Escribir un algoritmo que lea cuatro números y determine si el numero 1 es divisor 
//del numero3 Y si el numero 2 es el doble del numero4.// Entrada: Leer cuatro números (num1, num2, num3, num4)
// Proceso: Determinar si num1 es divisor de num3 Y si num2 es el doble de num4
// Salida: Imprimir el resultado de las dos condiciones
// se crea la funcion
const read = require('prompt-sync')(); 
const write = console.log 
function calcularValor() { 
    // Inicializar las variables
    let num1 = 0, num2 = 0, num3 = 0, num4 = 0;
    
    // Leer los cuatro números
    num1 = read("Ingrese el primer número: "); 
    num2 = read("Ingrese el segundo número: "); 
    num3 = read("Ingrese el tercer número: "); 
    num4 = read("Ingrese el cuarto número: "); 
 
    // Determinar si num1 es divisor de num3
    if (num3 % num1 == 0) {
       write("El número 1 es divisor del número 3: verdadero"); 
    } else {
       write("El número 1 es divisor del número 3: falso"); 
    }
 
    // Determinar si num2 es el doble de num4
    if (num2 == 2 * num4) {
       write("El número 2 es el doble del número 4: verdadero"); 
    } else {
       write("El número 2 es el doble del número 4: falso"); 
    }
 }
 
 calcularValor();
 