const producto = "Monitor de 20 pulgadas";


// .replace para reemplazar
console.log(producto);
console.log(producto.replace('pulgadas','"'));

console.log(producto.replace('Monitor','Monitor curvo'));


// .slice para extraer

console.log(producto.slice(9,8));


// .substring (alternativa a slice)

console.log(producto.slice(0,10));
console.log(producto.substring(10,9));

const usuario = "Daniel";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(4));

