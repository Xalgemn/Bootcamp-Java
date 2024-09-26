const nombres = (nombre, apellido) => {
    var a = nombre + " " + apellido;
    return a;
};

console.log(nombres('Miquel Angel', 'Martos Vilella')) 

var boleana = true


function funcion(Param1)
{
  console.log(Param1)
}

funcion(boleana);


function ejercicio(...valores){
    valores.forEach(element => {
        console.log(element)
    });
}

ejercicio('1', '2', '3', '4', '5');