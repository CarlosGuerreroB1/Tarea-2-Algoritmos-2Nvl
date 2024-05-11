//16. Solicitar al usuario un carácter y mostrar si es una vocal o consonante.
const read = require('prompt-sync')(); 
const write = console.log
function CoV(){
    let carc=""
    carc = read("Ingrese un caracter:")
    if(carc == "a" || carc == "e" || carc == "i" || carc == "o" || carc == "u" || carc == "A" || carc == "E" || carc == "I" || carc == "O" || carc == "U"){
        write("Es una vocal")
    }
    else{
        write("Es una consonante")
    }
}
CoV()