//interface Norris{
//    icon_url: string;
//    id: string;
//    url: string;
//    value: string;
//}

const request = new XMLHttpRequest();

const para = document.getElementById('text') as HTMLParagraphElement;
const norrisButton = document.getElementById('norrisBtn') as HTMLButtonElement | null;

norrisButton?.addEventListener('click', () => refresh())

function refresh()
{
    location.reload()
}


const myIP = '91.126.18.227';
const endPoint = 'https://api.chucknorris.io/jokes/random/';


fetch(endPoint);

fetch (endPoint)
.then(request => request.json())
.then( data => {
    para.textContent = data.value;
})





//async function fetchNorris(): Promise<Norris[]> {
//    try{
//        const response = await fetch('https://api.chucknorris.io/jokes/random');
//
//        if (!response.ok){
//            throw new Error('Error en la petición: '+ response.status)
//        }

//        const data: Norris[] = await response.json();

//        return data;

//    } catch (error) {
//        console.error('Error al consumir la API:', error);
//        return[];
//    }
//}

//fetchNorris().then(norrisList => {
//    norrisList.forEach(Norris => {
//        console.log(Norris.value);
//    })
//})