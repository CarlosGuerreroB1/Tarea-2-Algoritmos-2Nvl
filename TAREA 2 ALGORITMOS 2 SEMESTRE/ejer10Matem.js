//10. El banco POO ha decidido aumentar el límite de crédito de las tarjetas de crédito de 
//sus clientes, para esto considera que:
//Si su cliente tiene tarjeta tipo 1, el aumento será del $100 .
//Si tiene tipo 2 el aumento será del $200
//Si tiene tipo 3, el aumento será del $300
//Para cualquier otro tipo será del 500
//Se pide realizar un algoritmo que ayude al banco a determinar el nuevo límite de 
//crédito que tendrá una persona en su tarjeta considerando que después del aumento 
//se tendrá que subir 10% adicionales a todas las tarjetas
const read = require('prompt-sync')(); 
const write = console.log
function bancoPoo(){
    let tipo=0
    tipo = parseInt(read("Ingrese su tipo de tarjeta de crédito: "))
    if(tipo == 1){
        write("El aumento de su limite de credito es de $100")
    }
    else if(tipo == 2){
        write("El aumento de su limite de credito es de $200")
    }
    else if(tipo == 3){
        write("El aumento de su limite de credito es de $300")
    }
    else if(tipo > 3){
        write("El aumento del limite de su credito es de $500")
    }
}
bancoPoo()