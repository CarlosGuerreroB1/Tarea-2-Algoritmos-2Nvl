//28. Pide al usuario el precio total de una compra en una tienda en línea y el cupón de 
//descuento a aplicar en porcentaje. Si el precio total de la compra supera los $10, 
//aplica el descuento, de lo contrario, no aplica ningún descuento. Calcula y muestra el 
//monto final con el descuento con el IVA del 15%.
const read = require('prompt-sync')();
const write = console.log
function impuestoDesc(){
    let prc=0, iva=0, pf=0, dsc=0
    prc = parseFloat(read("Ingrese el total de su compra:"))
    dsc = parseFloat(read("Ingrese el porcentaje del cupon de descuento:"))
    if(prc >= 10){
        dsc = prc * dsc / 100
        write("Descuento:", dsc)
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