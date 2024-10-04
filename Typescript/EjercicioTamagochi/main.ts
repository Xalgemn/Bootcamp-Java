let happyNum: number = 0;
let eatNum: number = 0;
let fightNum: number = 0;
let sleepNum: number = 0;
let playNum: number = 0;

const eatBarFill = document.getElementById('eatFill') as HTMLDivElement | null;
const playBarFill = document.getElementById('playFill') as HTMLDivElement | null;
const sleepBarFill = document.getElementById('sleepFill') as HTMLDivElement | null;
const fightBarFill = document.getElementById('fightFill') as HTMLDivElement | null;
const happyBarFill = document.getElementById('happinessFill') as HTMLDivElement | null;

const btnEat1 = document.getElementById('eat1') as HTMLButtonElement | null;
const btnEat2 = document.getElementById('eat2') as HTMLButtonElement | null;
const btnEat3 = document.getElementById('eat3') as HTMLButtonElement | null;
const btnPlay1 = document.getElementById('play1') as HTMLButtonElement | null;
const btnPlay2 = document.getElementById('play2') as HTMLButtonElement | null;
const btnPlay3 = document.getElementById('play3') as HTMLButtonElement | null;
const btnFight1 = document.getElementById('fight1') as HTMLButtonElement | null;
const btnFight2 = document.getElementById('fight2') as HTMLButtonElement | null;
const btnSleep1 = document.getElementById('sleep1') as HTMLButtonElement | null;
const btnSleep2 = document.getElementById('sleep2') as HTMLButtonElement | null;

const txtEat = document.getElementById('greenPercent') as HTMLParagraphElement;
const txtPlay = document.getElementById('yellowPercent') as HTMLParagraphElement;
const txtFight = document.getElementById('redPercent') as HTMLParagraphElement;
const txtSleep = document.getElementById('bluePercent') as HTMLParagraphElement;
const txtHappiness = document.getElementById('happinessPercent') as HTMLParagraphElement;

btnEat1?.addEventListener('click', () => UpdateEat(eatNum + 10));
btnEat2?.addEventListener('click', () => UpdateEat(eatNum + 20));
btnEat3?.addEventListener('click', () => UpdateEat(eatNum + 30));
btnPlay1?.addEventListener('click', () => UpdatePlay(playNum + 10));
btnPlay2?.addEventListener('click', () => UpdatePlay(playNum + 20));
btnPlay3?.addEventListener('click', () => UpdatePlay(playNum + 30));
btnFight1?.addEventListener('click', () => updateFight(fightNum + 10));
btnFight2?.addEventListener('click', () => updateFight(fightNum + 20));
btnSleep1?.addEventListener('click', () => updateSleep(sleepNum + 10));
btnSleep2?.addEventListener('click', () => updateSleep(sleepNum + 20));


function UpdateEat(percent: number) {
    if (eatBarFill) {
        const clampedPercentage = Math.max(0, Math.min(percent, 100));
        eatNum = clampedPercentage;
        eatBarFill.style.width = `${clampedPercentage}%`;
        txtEat.textContent = clampedPercentage + '%' + ' Full';
        if (clampedPercentage < 30) {
            eatBarFill.style.backgroundColor = 'red';
        }
        else {
            eatBarFill.style.backgroundColor = 'green';
        }
        updateHappiness();
    }

}

function UpdatePlay(percent: number) {
    if (playBarFill) {
        const clampedPercentage = Math.max(0, Math.min(percent, 100));
        playNum = clampedPercentage;
        playBarFill.style.width = `${clampedPercentage}%`;
        txtPlay.textContent = clampedPercentage + '%' + ' Happy';
        if (clampedPercentage < 30) {
            playBarFill.style.backgroundColor = 'red';
        }
        else {
            playBarFill.style.backgroundColor = 'green';
        }
        updateHappiness();
    }
}

function updateSleep(percent: number) {
    if (sleepBarFill) {
        const clampedPercentage = Math.max(0, Math.min(percent, 100));
        sleepNum = clampedPercentage;
        sleepBarFill.style.width = `${clampedPercentage}%`;
        txtSleep.textContent = clampedPercentage + '%' + ' Energy';
        if (clampedPercentage < 30) {
            sleepBarFill.style.backgroundColor = 'red';
        }
        else {
            sleepBarFill.style.backgroundColor = 'green';
        }
        updateHappiness();
    }
}

function updateFight(percent: number) {
    if (fightBarFill) {
        const clampedPercentage = Math.max(0, Math.min(percent, 100));
        fightNum = clampedPercentage;
        fightBarFill.style.width = `${clampedPercentage}%`;
        txtFight.textContent = clampedPercentage + '%' + ' Strenght';
        if (clampedPercentage < 30) {
            fightBarFill.style.backgroundColor = 'red';
        }
        else {
            fightBarFill.style.backgroundColor = 'green';
        }
        updateHappiness();
    }
}

function updateHappiness() {
    if (happyBarFill) {
        const percent = (eatNum + playNum + sleepNum + fightNum) / 4;
        const clampedPercentage = Math.max(0, Math.min(percent, 100));
        happyBarFill.style.width = `${clampedPercentage}%`;
        txtHappiness.textContent = clampedPercentage + '%' + ' Happy';
    }
}

function startTimer(): void{
    setTimeout(() => {
        updateFight(fightNum -= Math.floor(Math.random() * (30 - 10 +1)) + 10);
        updateSleep(sleepNum -= Math.floor(Math.random() * (30 - 10 +1)) + 10);
        UpdateEat(eatNum -= Math.floor(Math.random() * (30 - 10 +1)) + 10);
        UpdatePlay(playNum -= Math.floor(Math.random() * (30 - 10 +1)) + 10);
        startTimer();
    }, 10000)
}

startTimer();



