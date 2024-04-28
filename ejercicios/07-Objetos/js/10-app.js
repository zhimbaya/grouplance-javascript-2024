const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
}
const medidas = {
    peso: "1Kg",
    precio: 500,
    longitud: "1m",
}
// Spread operator or rest operator
console.log(producto);
console.log(medidas);
const resultado = Object.assign(producto,medidas);
const resultado2 = {...producto, ...medidas};
console.log(resultado);
console.log(resultado2);