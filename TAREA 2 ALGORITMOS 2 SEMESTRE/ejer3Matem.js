//ejercicio3
const read = require('prompt-sync')(); 
const write = console.log 
function calcularValor() { 
   // Resuelve la expresión: 2 * (4 - 10 + 8) / 2 * 36 * (1 / 2)
   // v= 2 * (4 - 10 + 8) / 2 * 36 * (1 / 2)
   // v= 2 * 2 / 2 * 18
   // v= 4 / 2 * 18
   // v= 2 * 18
   // v= 36

   let v = 2 * (4 - 10 + 8) / 2 * 36 * (1 / 2);
   write("El valor de v es: " + v); 
}

calcularValor();
