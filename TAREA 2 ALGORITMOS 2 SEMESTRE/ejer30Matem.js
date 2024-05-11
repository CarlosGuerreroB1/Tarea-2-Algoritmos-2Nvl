//30. Pide al usuario el total de su cuenta en un restaurante y el porcentaje de descuento 
//que ofrece por ser cliente frecuente. Si el total de la cuenta supera los $70, aplica el 
//descuento por fidelidad, de lo contrario, no se aplica ningún descuento. Calcula y 
//muestra el monto final con el descuento aplicado más el IVA del 15%.
const read = require('prompt-sync')();
const write = console.log
function impuestoDesc(){
    let prc=0, iva=0, pf=0, dsc=0
    prc = parseFloat(read("Ingrese el total de su cuenta:"))
    dsc = parseFloat(read("Ingrese el porcentaje de descuento:"))
    if(prc >= 70){
        dsc = prc * dsc / 100
        write("Descuento por fidelidad:", dsc)
        iva = prc * 15 / 100
        write("IVA:", iva)
        pf = prc - dsc + iva
        write("Precio Final:", pf)
    }
    else{
        iva = prc * 15 / 100
        write("IVA:", iva)
        pf = prc + iva
        write("Precio Final:", pf)
    }
}
impuestoDesc()