var sound1 = new Audio('https://github.com/DavidBernalGonzalez/darbuka/blob/main/sounds/Darbuka_06_76_SP.mp3');
var sound2 = new Audio('https://github.com/DavidBernalGonzalez/darbuka/blob/main/sounds/Darbuka_118_76_SP.mp3');
var sound3 = new Audio('https://github.com/DavidBernalGonzalez/darbuka/blob/main/sounds/Darbuka_159_76_SP.mp3');
var sound4 = new Audio('https://github.com/DavidBernalGonzalez/darbuka/blob/main/sounds/Darbuka_42_76_SP.mp3');
var sound5 = new Audio('https://github.com/DavidBernalGonzalez/darbuka/blob/main/sounds/Darbuka_66_76_SP.mp3');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var button5 = document.getElementById('button5');
if (button1) {
    button1.addEventListener('click', function () {
        sound1.play().catch(function (error) {
            console.error('Error al reproducir el sonido:', error);
        });
    });
}
if (button2) {
    button2.addEventListener('click', function () {
        sound2.play().catch(function (error) {
            console.error('Error al reproducir el sonido:', error);
        });
    });
}
if (button3) {
    button3.addEventListener('click', function () {
        sound3.play().catch(function (error) {
            console.error('Error al reproducir el sonido:', error);
        });
    });
}
if (button4) {
    button4.addEventListener('click', function () {
        sound4.play().catch(function (error) {
            console.error('Error al reproducir el sonido:', error);
        });
    });
}
if (button5) {
    button5.addEventListener('click', function () {
        sound5.play().catch(function (error) {
            console.error('Error al reproducir el sonido:', error);
        });
    });
}
