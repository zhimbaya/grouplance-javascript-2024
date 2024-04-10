//NOSQL - NO SOLO SQL
//SQL - ESTRUCTURADO Y NO ESTRUCTURADO

//PROPIEDADES Y MÉTODOS DE JAVASCRIPT
const producto = "Monitor 20\"";
console.log(producto.length);
console.log(producto.indexOf("8"));
console.log(producto.includes("Monitor"));

//CONCATENAR
const precio = "150 €";
console.log(producto.concat(" cuesta " + precio));
console.log(`El producto ${producto} tiene un precio de ${precio}.`);
console.log("El producto ",producto);

const productos = "   Monitor de 20 pulgadas  ";
console.log(productos.trim());
console.log(productos.trimStart());
console.log(productos.trimEnd());

console.log(productos.replace(" ", "--"));
console.log(productos.replace("Monitor", "Monitor curvo"));

//extrae desde la posición
console.log(productos.slice(0,10));

console.log(producto.substring(5,2));

const usuario = "Diego";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(4));

//repetir
const texto = "en Promocion".repeat(3);
console.log(texto);
console.log(`${producto} ${texto}`);

//split
const actividad = "Estoy aprendiendo JavaScript";
console.log(actividad.split(" "));

//mayúsculas
console.log(actividad.toUpperCase());
console.log(actividad.toLowerCase());

console.log(precio.toString());

