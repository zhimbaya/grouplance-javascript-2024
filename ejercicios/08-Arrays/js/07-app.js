const carrito = [];

const producto = {
    nombre: "Monitor 27 ",
    precio: 500,
}

const producto2 = {
    nombre: "Móvil ",
    precio: 800,
}

carrito.push(producto2); //FORMA IMPERATIVA
carrito.push(producto); //añade al final

const producto3 = {
    nombre: "Teclado ",
    precio: 30,
}

const producto4 = {
    nombre: "Auriculares ",
    precio: 90,
}

carrito.unshift(producto3);

carrito.push(producto4);
console.table(carrito);

//carrito.pop(); //ELIMINA AL FINAL
//console.table(carrito);

//carrito.shift(); //ELIMINA EL PRINCIPIO,, 
//console.table(carrito);

carrito.splice(0,2);
console.table(carrito);

const a = carrito.length;
console.log(a);
carrito.splice(a-1,1);
console.table(carrito);
