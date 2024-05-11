//ejer5
const read = require('prompt-sync')(); 
const write = console.log 
function calcularValor() { 
   // Resuelve la expresión: ((8 > 2) || (932 < 23)) && 4 == 2
   // v= ((8 > 2) || (932 < 23)) && 4 == 2
   // v= (true || false) && false
   // v= true && false
   // v= false

   let v = ((8 > 2) || (932 < 23)) && 4 == 2;
   write("El valor de v es: " + v); 
}

calcularValor();
