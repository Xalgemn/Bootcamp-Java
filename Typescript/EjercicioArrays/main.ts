const thisArray: string[] = [];

const arrayItems: string[] = ['👽', '👾', '🤠'];
const randomItem = (arrayItems: string[]): string => { return arrayItems[(Math.floor(Math.random() * arrayItems.length))] };

const buttonPush = document.getElementById("push") as HTMLButtonElement;
const buttonUnshift = document.getElementById("unshift") as HTMLButtonElement;
const buttonInsert = document.getElementById("insert") as HTMLButtonElement;
const buttonPop = document.getElementById("pop") as HTMLButtonElement;
const buttonShift = document.getElementById("shift") as HTMLButtonElement;
const buttonRemove = document.getElementById("remove") as HTMLButtonElement;

const insertSelect = document.getElementById("insertIndex") as HTMLSelectElement;
const removeSelect = document.getElementById("removeIndex") as HTMLSelectElement;

const arrayPush = () => {
    thisArray.push(randomItem(arrayItems));
    actualizarH1(thisArray.toString());
}

const arrayUnshift = () => {
    thisArray.unshift(randomItem(arrayItems));
    actualizarH1(thisArray.toString());
}

const arrayInsert = () => {
    const selectedIndex = insertSelect.value;
    const index = parseInt(selectedIndex);

    thisArray.splice(index, 0, randomItem(arrayItems));
    actualizarH1(thisArray.toString());
}

const arrayPop = () => {
    thisArray.pop();
    actualizarH1(thisArray.toString());
}

const arrayShift = () => {
    thisArray.shift();
    actualizarH1(thisArray.toString());
}

const arrayRemove = () => {
    const removeIndex = removeSelect.value;
    const index = parseInt(removeIndex);

    thisArray.splice(index, 1);
    actualizarH1(thisArray.toString());
}

const actualizarH1 = (texto: string) => {
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
buttonRemove.addEventListener("click", arrayRemove);