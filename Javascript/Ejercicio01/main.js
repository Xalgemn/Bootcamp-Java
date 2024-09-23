var nombre, edad, boleana, nada, indefinido, simbolo;
nombre = "Miquel Àngel";
edad = 24;
boleana = true;
nada = null;
indefinido = undefined;
simbolo = Symbol("hello");
objeto = {name: 'Miquel Àngel', surname: 'Martos Vilella'};

console.log(nombre);
console.log(edad);
console.log(boleana);
console.log(nada);
console.log(indefinido);
console.log(simbolo);
console.log(objeto)


console.log(typeof(nombre))
console.log(typeof(edad))
console.log(typeof(boleana))
console.log(typeof(nada))
console.log(typeof(indefinido))
console.log(typeof(simbolo))
console.log(typeof(objeto))

var variableGlobal = 100;

function local(){
var variableLocal = 0;

}
