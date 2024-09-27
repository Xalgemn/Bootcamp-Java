function AO(palabra){
    const result = palabra.replaceAll('a', 'o');
    return result;
}

console.log(AO('aaa'));

function Aca(word){
    
    const result = word.startsWith('aca');
    

    return result;
}

console.log(Aca('academia'));
console.log(Aca('escuela'));

function Repeat(word){
    const result = word.repeat(3);
    return result;
}

console.log(Repeat('Hola '));


