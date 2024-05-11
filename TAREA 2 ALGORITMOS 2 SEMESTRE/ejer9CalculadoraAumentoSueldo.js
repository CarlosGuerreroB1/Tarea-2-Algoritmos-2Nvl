//9. Calculadora de sueldo con aumento: Pide al usuario que ingrese su salario actual y el 
//porcentaje de aumento que recibirá. Calcula y muestra el nuevo salario después del 
//aumento.
 // Entrada: Leer el salario actual (salarioActual) y el porcentaje de aumento (porcentajeAumento)
// Proceso: Calcular el nuevo salario después del aumento
// Salida: Imprimir el nuevo salario
const read = require('prompt-sync')(); 
const write = console.log 
function calcularNuevoSalario() { 
    // Inicializar las variables
    let salarioActual = 0, porcentajeAumento = 0;
    
    // Leer el salario actual y el porcentaje de aumento
    salarioActual = +read("Ingrese su salario actual: "); 
    porcentajeAumento = +read("Ingrese el porcentaje de aumento que recibirá: "); 
 
    // Calcular el nuevo salario después del aumento
    let aumento = salarioActual * (porcentajeAumento / 100);
    let nuevoSalario = salarioActual + aumento;
 
    // Imprimir el nuevo salario
    write("Su nuevo salario después del aumento es: " + nuevoSalario); 
 }
 
 calcularNuevoSalario();
 