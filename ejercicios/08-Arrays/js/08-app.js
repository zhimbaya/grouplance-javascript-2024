const producto = {
    nombre: "Monitor 27 ",
    precio: 500,
}

const { precio } = producto;
console.log(precio);

const numeros = [10, 20, 30, 40];
//const [ ,,,cuarto ] = numeros; // CON COMAS EN ARRAYS
// console.log(cuarto);
const [one, two,...x] = numeros; //rest operator
console.log(x);