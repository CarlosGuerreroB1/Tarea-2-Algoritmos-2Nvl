//260 / 12 + 54 % 3 – 85 % 7
const read = require('prompt-sync')(); 
const write = console.log
function calculaElValor(){
    //Resolvamos el ejercicio
    //260 / 12 + 54 % 3 – 85 % 7
    //21.66 + 0 - 1
    //20.66
    let v = 260 / 12 + 54 % 3 - 85 % 7
    write("La respuesta es ", v)
}
calculaElValor()