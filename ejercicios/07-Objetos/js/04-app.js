const producto = {
    nombre: "Monitor",
    precio : 300,
    disponible : true,
}

//distructuring
const { nombre, precio }  = producto;
//const { precio }  = producto;
console.log(nombre);
console.log(precio);