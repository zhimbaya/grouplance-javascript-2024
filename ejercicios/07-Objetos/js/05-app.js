//objetos anidados
const producto = {
    nombre: "Monitor",
    precio : 300,
    disponible : true,
    informacion : {
        caracteristicas : {
            peso : "1kg",
            medida : "1m",
        },
        fabricacion : {
            pais : "china",
        }
    },
}

console.log(producto);
console.log(producto.precio);
console.log(producto.informacion.caracteristicas.medida);
console.log(producto.informacion.fabricacion.pais);