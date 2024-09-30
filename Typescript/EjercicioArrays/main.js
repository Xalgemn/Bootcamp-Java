var thisArray = ["[", "]"];
function actualizarH1(texto) {
    var h1 = document.getElementById("arrayText");
    if (h1) {
        h1.textContent = texto;
    }
}
actualizarH1(thisArray.toString());
