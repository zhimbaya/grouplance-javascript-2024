const carrito = [
    {nombre: "Monitor de 27 pulgadas", precio: 500},
    {nombre: "Televisión", precio: 800},
    {nombre: "Tablet", precio: 1100},
    {nombre: "Auriculares", precio: 100},
    {nombre: "Teclado", precio: 40},
    {nombre: "Movil", precio: 600},
]

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio} €`);
})
carrito.map(function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio} €`);
})
const nuevoArray = carrito.forEach(function(producto){
    return `${producto.nombre} - Precio: ${producto.precio} €`;
})
//Map crea un nuevo arreglo.
const nuevoArray = carrito.map(function(producto){
    return `${producto.nombre} - Precio: ${producto.precio} €`;
})
console.log(nuevoArray); //indefined
console.log(nuevoArray2);