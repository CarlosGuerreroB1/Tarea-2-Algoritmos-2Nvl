//8. Pedir al usuario un número y mostrar si es negativo menor que -20, sino mostrar si 
//es positivo par o impar múltiplo de 7.
const read = require('prompt-sync')(); 
const write = console.log
function negaposi(){
    let num=0, minus=-20
    num = parseFloat+read("Ingrese un numero: ")
    if(num < 0 && num < minus){
        write(num, " es negativo y menor a -20")
    }
    else if(num > 0 && num % 2 == 0){
        write(num, " es positivo y es par")
    }
    else if (num % 7 ==0){
        write("El numero es impar y multiplo de 7")
    }

}
negaposi() 