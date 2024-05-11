//Solicita al usuario su sueldo actual y el porcentaje de incremento salarial anual. Si el 
//sueldo actual es menor que 500, aplica el incremento del 5%, de lo contrario, no 
//aplica ningún incremento. Calcula y muestra el sueldo esperado con el incremento 
//aplicado.
const read = require('prompt-sync')(); 
const write = console.log 
// Entrada: Leer el sueldo actual (sueldoActual) y el porcentaje de incremento salarial anual (incrementoSalarial)
// Proceso: Si el sueldo actual es menor que 500, aplica el incremento del 5%, de lo contrario, no aplica ningún incremento
// Salida: Calcular y mostrar el sueldo esperado con el incremento aplicado

// se crea la funcion
function calcularSueldoEsperado() { 
    // Inicializar las variables
    let sueldoActual = 0, incrementoSalarial = 0;
    
    // Leer el sueldo actual y el porcentaje de incremento salarial anual
    sueldoActual = +read("Ingrese su sueldo actual: "); 
    incrementoSalarial = +read("Ingrese el porcentaje de incremento salarial anual: "); 
 
    // Si el sueldo actual es menor que 500, aplica el incremento del 5%, de lo contrario, no aplica ningún incremento
    if (sueldoActual < 500) {
       sueldoActual += sueldoActual * (incrementoSalarial / 100);
       write("Se aplicó un incremento del " + incrementoSalarial + "% a su sueldo."); 
    } else {
       write("No se aplica ningún incremento a su sueldo."); 
    }
 
    // Calcular y mostrar el sueldo esperado con el incremento aplicado
    write("Su sueldo esperado con el incremento aplicado es: " + sueldoActual); 
 }
 
 calcularSueldoEsperado();
 