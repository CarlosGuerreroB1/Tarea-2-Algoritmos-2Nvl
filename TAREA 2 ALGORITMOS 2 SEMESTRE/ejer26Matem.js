//26. Pide al usuario el precio de un artículo y el porcentaje de impuesto de ventas aplicado 
//en su región. Si el precio del artículo supera los $200, aplica el impuesto de ventas, 
//de lo contrario, no se aplica impuesto. Calcula y muestra el precio final luego de 
//aplicar el impuesto.
const read = require('prompt-sync')();
const write = console.log
function impuesto(){
    let prc=0, iva=0, pf=0
    prc = parseFloat(read("Ingrese el precio del articulo:"))
    iva = parseFloat(read("Ingrese el porcentaje del iva:"))
    if(prc >= 200){
        iva = prc * iva / 100
        write("IVA:", iva)
        pf = prc + iva
        write("Precio Final:", pf)
    }
    else{
        write("Precio Final:", prc)
    }
}
impuesto()