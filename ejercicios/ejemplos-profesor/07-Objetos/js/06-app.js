const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        caracteristicas:{
            peso: "1kg",
            medida: "1m",
        },
        fabricacion:{
            pais: "China",
        }
    },

}

const { nombre, informacion, informacion: { fabricacion: { pais } }, informacion: {caracteristicas: { medida }} } = producto;
//console.log(nombre);
//console.log(pais);
console.log(informacion);
console.log(medida);