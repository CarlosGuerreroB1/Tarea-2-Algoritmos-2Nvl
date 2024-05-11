//24. Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, 
//considerando que la nota mínima de aprobación es 60 puntos. Si la nota es mayor a 
//40 y menor a 60 se queda para recuperación caso contario pierde la materia.
const read = require('prompt-sync')();
const write = console.log
function aprobadoreprobado(){
    let nota=""
    nota = parseInt(read("Ingrese su nota del examen:"))
    if(nota >= 60){
        write("Su nota del examen " +nota+ " por lo tanto esta aprobado, FELICIDADES")
    }
    else if(nota >= 40 && nota < 60){
        write("Usted pasa al de recuperacion")
    }
    else{
        write("Su nota es de " +nota+ " por  lo tanto esta reprobado, Lo siento, suerte la proxima")
    }
}
aprobadoreprobado()