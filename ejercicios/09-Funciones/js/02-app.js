//Declaración de función (Function Declaration)
//JS lo ejecuta en dos escanéos = hoisting
sumar(); //funciona
function sumar(){
    console.log(2+2);
}

//Expresión de Funciones (Function Expression)

sumar2();
const sumar2 = function(){
    console.log(3 + 3);
}
