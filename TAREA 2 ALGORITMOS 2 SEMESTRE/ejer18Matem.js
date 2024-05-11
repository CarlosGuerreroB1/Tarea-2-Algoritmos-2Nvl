//18. Pedir al usuario un número y mostrar si es múltiplo de 3 y par.
const read = require('prompt-sync')(); 
const write = console.log
function multi3(){
    let num=0
    num = parseInt(read("Ingrese un numero:"))
    if(num % 3 == 0 && num % 2 == 0){
        write("El numero es par y multiplo de 3")
    }
    else{
        write("El numero  no es par y no es multiplo de 3")
    }
}
multi3()