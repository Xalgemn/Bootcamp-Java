//interface Norris{
//    icon_url: string;
//    id: string;
//    url: string;
//    value: string;
//}
var request = new XMLHttpRequest();
var para = document.getElementById('text');
var norrisButton = document.getElementById('norrisBtn');
norrisButton === null || norrisButton === void 0 ? void 0 : norrisButton.addEventListener('click', function () { return refresh(); });
function refresh() {
    location.reload();
}
var myIP = '91.126.18.227';
var endPoint = 'https://api.chucknorris.io/jokes/random/';
fetch(endPoint);
fetch(endPoint)
    .then(function (request) { return request.json(); })
    .then(function (data) {
    para.textContent = data.value;
});
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
