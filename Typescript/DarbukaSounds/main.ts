const sound1 = new Audio('https://github.com/DavidBernalGonzalez/darbuka/blob/main/sounds/Darbuka_06_76_SP.mp3')
const sound2 = new Audio('https://github.com/DavidBernalGonzalez/darbuka/blob/main/sounds/Darbuka_118_76_SP.mp3')
const sound3 = new Audio('https://github.com/DavidBernalGonzalez/darbuka/blob/main/sounds/Darbuka_159_76_SP.mp3')
const sound4 = new Audio('https://github.com/DavidBernalGonzalez/darbuka/blob/main/sounds/Darbuka_42_76_SP.mp3')
const sound5 = new Audio('https://github.com/DavidBernalGonzalez/darbuka/blob/main/sounds/Darbuka_66_76_SP.mp3')

const button1 = document.getElementById('button1') as HTMLButtonElement;
const button2 = document.getElementById('button2') as HTMLButtonElement;
const button3 = document.getElementById('button3') as HTMLButtonElement;
const button4 = document.getElementById('button4') as HTMLButtonElement;
const button5 = document.getElementById('button5') as HTMLButtonElement;

document.addEventListener('keydown', (event: KeyboardEvent) => {
    const key = event.key;

    if (key == 'w') {
        sound1.play().catch(error => {
            console.error('Error al reproducir el sonido:', error);
        });
    }
    else if (key == 'a') {
        sound2.play().catch(error => {
            console.error('Error al reproducir el sonido:', error);
        });
    }
    else if (key == 'd') {
        sound3.play().catch(error => {
            console.error('Error al reproducir el sonido:', error);
        });
    }
    else if (key == 's') {
        sound4.play().catch(error => {
            console.error('Error al reproducir el sonido:', error);
        });
    }
    else if (key == 'e') {
        sound5.play().catch(error => {
            console.error('Error al reproducir el sonido:', error);
        });
    }
})



if (button1) {
    button1.addEventListener('click', () => {
        sound1.play().catch(error => {
            console.error('Error al reproducir el sonido:', error);
        });
    });
}

if (button2) {
    button2.addEventListener('click', () => {
        sound2.play().catch(error => {
            console.error('Error al reproducir el sonido:', error);
        });
    });
}

if (button3) {
    button3.addEventListener('click', () => {
        sound3.play().catch(error => {
            console.error('Error al reproducir el sonido:', error);
        });
    });
}

if (button4) {
    button4.addEventListener('click', () => {
        sound4.play().catch(error => {
            console.error('Error al reproducir el sonido:', error);
        });
    });
}

if (button5) {
    button5.addEventListener('click', () => {
        sound5.play().catch(error => {
            console.error('Error al reproducir el sonido:', error);
        });
    });
}

