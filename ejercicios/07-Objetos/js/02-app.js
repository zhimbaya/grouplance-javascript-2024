const producto = { // con LET si deja cambiar el objeto.
    nombre: "Monitor",
    precio : 300,
    disponible : true,
}
// con CONST PUEDES CAMBIAR LAS PROPIEDADES
producto.imagen = "imagen.jpg";
delete producto.precio;

console.log(producto);
