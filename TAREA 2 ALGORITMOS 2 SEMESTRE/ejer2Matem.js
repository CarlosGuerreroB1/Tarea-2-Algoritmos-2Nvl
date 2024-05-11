//(5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
const read = require('prompt-sync')(); 
const write = console.log 
function calculaElValor(){
    //Resolvemos el ejercicio
    //(5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
    // 11 + 9 > 15 * 2
    // 20 > 0
    write("(5 + 3 * 2) + 9 > 3 * 5 * 14 % 3")
    let c1=0, c2=0, TF=""
    c1=(5 + 3 *2) + 9
    c2= 3 * 5 * 14 % 3
    TF = c1 > c2
    write(TF)
}
calculaElValor()