const producto = "                     Monitor de 20 pulgadas          ";
console.log(producto);
console.log(producto.length);


//Eliminar del inicio

console.log(producto.trimStart());

//Chaining
console.log(producto.trimStart().trimEnd());



console.log(producto.trim());
console.log(producto.length);
const producto2=producto.trimStart();
console.log(producto);
console.log(producto2);
console.log(producto2.length);