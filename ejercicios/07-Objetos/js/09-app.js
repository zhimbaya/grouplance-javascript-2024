//Sellar
"use strict"; //da alertas de errores

const producto = {
    nombre: "Monitor",
    precio : 300,
    disponible : true,
}

Object.seal(producto); //se sellan
producto.precio = 600; //deja cambiar el atributo
// producto.imagen = "imagen.jpg";
// delete producto.nombre; //no se puede eliminar

console.log(producto);
console.log(Object.isFrozen(producto));
console.log(producto.precio);
console.log(Object.isSealed(producto));



