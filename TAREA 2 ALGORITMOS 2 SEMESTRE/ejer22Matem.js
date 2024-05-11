//22. Pedir al usuario el monto total de una factura y el año de la compra. Luego, calcular 
//y mostrar el monto total a pagar incluyendo el IVA. Si el año de la compra es menor 
//al 2024 el porcentaje del IVA es del 12% caso contrario aplicar el IVA del 15%.
const read = require('prompt-sync')(); 
const write = console.log
function montoTotal(){
    let st=0, iva=0, mt=0, año=0
    st = parseFloat(read("Ingrese el monto toal de la factura:"))
    año = parseInt(read("Ingrese el año de la factura:"))
    if(año < 2024){
        iva = st * 12 / 100
        write("Iva 12%:", iva)
        mt = st + iva
        write("Monto total:", mt)
    }
    else{
        iva = st * 15 / 100
        write("Iva 15%:", iva)
        mt = st + iva
        write("Monto total:", mt)
    }
}
montoTotal()