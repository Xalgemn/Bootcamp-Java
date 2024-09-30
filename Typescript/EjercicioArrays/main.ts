const thisArray: string[] = [];

function actualizarH1(texto: string){
    const h1 = document.getElementById("arrayText") as HTMLHeadingElement;
    if (h1)
    {
        h1.textContent = texto;
    }
}

actualizarH1(thisArray.toString());