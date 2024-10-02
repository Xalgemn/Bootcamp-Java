var thisArray = [];
var buttonPush = document.getElementById("push");
var buttonUnshift = document.getElementById("unshift");
var buttonInsert = document.getElementById("insert");
var buttonPop = document.getElementById("pop");
var buttonShift = document.getElementById("shift");
var buttonRemove = document.getElementById("remove");
var insertSelect = document.getElementById("insertIndex");
var removeSelect = document.getElementById("removeIndex");
function arrayPush() {
    thisArray.push("🎂");
    actualizarH1(thisArray.toString());
}
function arrayUnshift() {
    thisArray.unshift("👀");
    actualizarH1(thisArray.toString());
}
function arrayInsert() {
    var selectedIndex = insertSelect.value;
    var index = parseInt(selectedIndex);
    thisArray.splice(index, 0, "🎁");
    actualizarH1(thisArray.toString());
}
function arrayPop() {
    thisArray.pop();
    actualizarH1(thisArray.toString());
}
function arrayShift() {
    thisArray.shift();
    actualizarH1(thisArray.toString());
}
function arrayRemove() {
    var removeIndex = removeSelect.value;
    var index = parseInt(removeIndex);
    thisArray.splice(index, 1);
    actualizarH1(thisArray.toString());
}
function actualizarH1(texto) {
    var h1 = document.getElementById("arrayText");
    if (h1) {
        h1.textContent = texto;
    }
}
buttonPush.addEventListener("click", arrayPush);
buttonUnshift.addEventListener("click", arrayUnshift);
buttonInsert.addEventListener("click", arrayInsert);
buttonPop.addEventListener("click", arrayPop);
buttonShift.addEventListener("click", arrayShift);
buttonRemove.addEventListener("click", arrayRemove);
