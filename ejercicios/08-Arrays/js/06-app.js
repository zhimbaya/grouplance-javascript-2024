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
carrito.push(producto);

const producto3 = {
    nombre: "Teclado ",
    precio: 30,
}
const producto4 = {
    nombre: "HD ",
    precio: 80,
}

console.table(carrito);

let resultado;

// ...spread operators
resultado = [...carrito, producto3]; //FORMA DECLARATIVA
resultado = [producto4, ...resultado];
console.table(resultado);

console.table(carrito);

