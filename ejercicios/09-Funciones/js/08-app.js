function sumar(a, b){
    return a + b;
}
a = 7;
b = 8;

resultado = sumar(a,b); 

console.log(`El resultado de la suma ${a} + ${b} es: ${resultado}`);

//Ejemplo carrito
let total = 0;
function agregarCarrito(precio){
    return total += precio;
}
function calcularIva(){
    return total * 1.21;
}
total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(50);

const totalPagar = calcularIva(total);
console.log(`Sin IVA ${total}`);
console.log(`Con IVA ${totalPagar}`);