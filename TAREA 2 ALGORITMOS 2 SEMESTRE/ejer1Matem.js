//Expresiones_Matemáticas
//ejercicio 1
//para a= 8 y b= 5,encuentra el valor de v= 2 * b + a div2 + 4 * b mod a
//v= 2 * b + a div 2 + 4 * (b mod a)
//v= 2 * 5 + (8 div 2 ) + 4 * (5 mod 8)
//v= 10 + 4 + 4 * 5
//v= 14 + 20
//v= 34

    const read = require('prompt-sync')(); 
    const write = console.log 
    // se crea la funcion
    function calcularValor() { 
       let a = 8; 
       let b = 5; 
       let v = 2 * b + ((a / 2) | 0) + 4 * (b % a);
       write("El valor de v es: " + v); 
    }
    
    calcularValor();
