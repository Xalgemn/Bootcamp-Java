const thisArray: string[] = [];

const buttonPush = document.getElementById("push") as HTMLButtonElement;
const buttonUnshift = document.getElementById("unshift") as HTMLButtonElement;
const buttonInsert = document.getElementById("insert") as HTMLButtonElement;
const buttonPop = document.getElementById("pop") as HTMLButtonElement;
const buttonShift = document.getElementById("shift") as HTMLButtonElement;
const buttonRemove = document.getElementById("remove") as HTMLButtonElement;

const insertSelect = document.getElementById("insertIndex") as HTMLSelectElement;
const removeSelect = document.getElementById("removeIndex") as HTMLSelectElement;

function arrayPush() {
    thisArray.push("🎂");
    actualizarH1(thisArray.toString());
}

function arrayUnshift(){
    thisArray.unshift("👀");
    actualizarH1(thisArray.toString());
}

function arrayInsert(){
    const selectedIndex = insertSelect.value;
    const index = parseInt(selectedIndex);


    thisArray.splice(index, 0,"🎁");
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

function arrayRemove(){
    const removeIndex = removeSelect.value;
    const index = parseInt(removeIndex);

    thisArray.splice(index, 1);
    actualizarH1(thisArray.toString());
}

function actualizarH1(texto: string) {
    const h1 = document.getElementById("arrayText");
    if (h1) {
        h1.textContent = texto;
    }
}



buttonPush.addEventListener("click", arrayPush);
buttonUnshift.addEventListener("click", arrayUnshift);
buttonInsert.addEventListener("click", arrayInsert);
buttonPop.addEventListener("click", arrayPop);
buttonShift.addEventListener("click", arrayShift);
buttonRemove.addEventListener("click",arrayRemove);