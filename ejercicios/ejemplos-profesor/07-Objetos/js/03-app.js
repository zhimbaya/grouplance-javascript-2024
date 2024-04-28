const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
}
//producto=8;

producto.disponible= false;
console.log(producto);

// Agregar nueva propiedades
producto.imagen = "imagen.jpg";
// Eliminar propiedades
delete producto.precio;
//console.log(producto);