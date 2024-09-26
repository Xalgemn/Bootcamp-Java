function sumar(var1, var2, var3)
{
    return var1 + var2 + var3;
}
console.log(sumar(4, 7, 13));


function juntar(nombre, apellido1, apellido2)
{
    return nombre + " " + apellido1 + " " + apellido2
}

console.log(juntar("Miquel Angel", "Martos", "Vilella"));

function mayor(num1, num2)
{
    if(num1 > num2)
    {
        return num1;
    }
    else
        return num2;
}

console.log(mayor(18, 47));