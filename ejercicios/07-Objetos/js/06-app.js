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

const { nombre,informacion, informacion : { fabricacion : { pais } } } = producto;
console.log(nombre);
console.log(pais);
console.log(informacion);