//29. Pide al usuario su salario actual y la cantidad de años de antigüedad. Calcule el valor 
//del bono de antigüedad del empleado aplicando el 3% del salario por el número de 
//años de antigüedad siempre y cuando supere los 3 años, caso contrario el bono de 
//antigüedad es de cero. Se pide mostrar el salaria y el bono de antigüedad. 
const read = require('prompt-sync')(); 
const write = console.log 

// Entrada: Leer el salario actual (salarioActual) y la cantidad de años de antigüedad (aniosAntiguedad)
// Proceso: Calcular el valor del bono de antigüedad del empleado aplicando el 3% del salario por el número de años de antigüedad siempre y cuando supere los 3 años, caso contrario el bono de antigüedad es de cero
// Salida: Mostrar el salario y el bono de antigüedad

// se crea la funcion
function calcularBonoAntiguedad() { 
    // Inicializar las variables
    let salarioActual = 0, aniosAntiguedad = 0;
    
    // Leer el salario actual y la cantidad de años de antigüedad
    salarioActual = +read("Ingrese su salario actual: "); 
    aniosAntiguedad = +read("Ingrese la cantidad de años de antigüedad: "); 
 
    // Calcular el valor del bono de antigüedad del empleado
    let bonoAntiguedad = 0;
    if (aniosAntiguedad > 3) {
       bonoAntiguedad = salarioActual * 0.03 * aniosAntiguedad;
    }
 
    // Mostrar el salario y el bono de antigüedad
    write("Su salario actual es: " + salarioActual); 
    write("Su bono de antigüedad es: " + bonoAntiguedad); 
 }
 
 calcularBonoAntiguedad();
 