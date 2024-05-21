const carrito = [
    {nombre: "Monitor de 27 pulgadas", precio: 500},
    {nombre: "Televisión", precio: 800},
    {nombre: "Tablet", precio: 1100},
    {nombre: "Auriculares", precio: 100},
    {nombre: "Teclado", precio: 40},
    {nombre: "Movil", precio: 600},
]
for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Price: ${carrito[i].precio} €`);
}

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio} €`);
})