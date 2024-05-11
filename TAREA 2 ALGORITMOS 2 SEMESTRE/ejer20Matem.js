//20. Pedir al usuario un número y mostrar si es mayor 0 y menor o igual a 100.
const read = require('prompt-sync')(); 
const write = console.log
function myMn100(){
    let num=0
    num = parseInt(read("Ingrese un numero:"))
    if(num > 0 && num <= 100){
        write("El numero es mayor a cero y menor  o igual a 100")
    }
    else{
        write("El numero es mayor que 100")
    }
}
myMn100()