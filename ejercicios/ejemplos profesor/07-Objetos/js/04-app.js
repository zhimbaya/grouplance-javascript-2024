const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// const nombre= producto.nombre;
// console.log(nombre);
// console.log(producto.nombre);


//Distructuring
const { nombre, precio, imagen } = producto;
// const { precio } = producto;
console.log(nombre);
console.log(precio);
console.log(imagen);