//Escribir un algoritmo que lea cuatro números y determine si el numero 1 es la mitad
//del número 2; Y si el numero 3 es divisor del numero4.
const read = require('prompt-sync')(); 
const write = console.log
function numDt(){
    let n1=0, n2=0, n3=0, n4=0
    n1 = parseInt(read("Ingrese el primer numero"))
    n2 = parseInt(read("Ingrese el segundo numero"))
    n3 = parseInt(read("Ingrese el tercer numero"))
    n4 = parseInt(read("Ingrese el cuarto numero"))
    if(n1 / n2 ==0 && n3 % n4 ==0){
        write(n1, " si es mitad de ", n2, " y ", n3, " si es divisor de ", n4)
    }
    else{
        write(n1, " no es mitad de ", n2, " y ", n3, " no es divisor de ", n4)
    }
}
numDt()