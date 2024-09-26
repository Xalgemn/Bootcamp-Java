var moneda = (Math.round(Math.random()));

console.log(moneda)

function CaraCruz(resultado)
{
    

    if(resultado == 0)
    {
        return "cruz";
    }
    else
        return "cara";

    
}

console.log(CaraCruz(moneda));

