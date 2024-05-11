//12. Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
const read = require('prompt-sync')(); 
const write = console.log
function mayMen(){
    let edad=0
    edad = parseInt(read("Ingrese su edad:"))
    if(edad >= 18){
        write("Usdted es mayor de edad")
    }
    else{
        write("Usted es menor de edad")
    }
}
mayMen()