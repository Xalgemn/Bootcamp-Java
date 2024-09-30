const array1 = ["🍔", "🌯", "🌭", "🍕", "🍜", "🍱", "🍙", "🍘", "🥑"];
const array2 = ["🍕", "🍕", "🍍", "🍕", "🍕"];
const array3 = ["🍓", "🍋", "🍓", "🍋", "🍓"];
const array4 = ["🌶", "🥛", "🌶", "🥛", "🌶", "🥛"];
const array5 = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];

// console.log(array1.fill("🍺", 4, array1.length));

// function hasPiña(element, index) {

//     if (element == "🍍") {
//         console.log(array2[index] + " encontrada en posición " + index);
//     }
// }

// array2.findIndex(hasPiña);

// function RemoveItem() {
//     var index = array2.indexOf("🍍");
//     if (index > -1) {
//         array2.splice(index, 1)
//     }

//     console.log(array2);
// }

// RemoveItem();

// function changeFresas(element, index) {
//     if (element == "🍓") {
//         array3.forEach(element => {
//             array3.splice(index, 1, "🍄")
//         });
//     }
// }

// array3.findIndex(changeFresas);
// console.log(array3);
//const arrayAux = [];
//array4.forEach((element, index, array) => {
//    (element == "🌶" && array[index+1] != '🥵')
//        ?arrayAux.push("🌶", '🥵') //true
//        :arrayAux.push(element); //false
//});

//console.log(arrayAux);

const arrayAux2 = [];
array5.forEach((element, index, array) => {

    (element == "🎴" && array[index+1] != '🃏')
        ?arrayAux2.push("🎴", '🃏')
        :arrayAux2.push(element);

});

console.log(arrayAux2);













