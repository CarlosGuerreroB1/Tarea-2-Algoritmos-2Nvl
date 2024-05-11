//14. Solicitar al usuario un número y mostrar si es positivo o negativo.
const read = require('prompt-sync')(); 
const write = console.log
function negaposi(){
    let num=0
    num = parseInt(read("Ingrese un numero: "))
    if(num < 0){
        write(num, " es negativo")
    }
    else if(num > 0){
        write(num, " es positivo ")
    }

}
negaposi()