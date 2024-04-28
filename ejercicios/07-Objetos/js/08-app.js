//Métodos de objeto
"use strict"; //da alertas de errores

const peso = 100;
//peso = 200;

const producto = {
    nombre: "Monitor",
    precio : 300,
    disponible : true,
}

Object.freeze(producto); //se dejan fijos los atributos
//producto.precio = 600;
//producto.imagen = "imagen.jpg";
//delete producto.nombre;

console.log(producto.precio);
console.log(Object.isFrozen(producto));


