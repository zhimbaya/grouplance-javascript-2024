const producto = {
    nombre: "Monitor",
    precio : 300,
    disponible : true,
}

console.log(producto);
producto.imagen = "imagen.jpg";
delete producto.precio;

producto = 20;
console.log(producto);