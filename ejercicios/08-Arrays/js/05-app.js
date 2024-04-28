const meses = ["Enero", "Febrero", "Marzo"];

//console.table(meses);
meses[3] = "Abril";

// Agregar al final del arreglo
meses.push("Mayo");

console.table(meses);

// Vamos a crear un carrito
const carrito = [];
const producto = {
    nombre: "Monitor 14 Pulgadas",
    precio: 300,
};
const producto2 = {
    nombre: "TV",
    precio: 600,
};

// push añade al final de la lista
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: "Teclado",
    precio: 30,
};

carrito.unshift(producto3);
console.table(carrito);



