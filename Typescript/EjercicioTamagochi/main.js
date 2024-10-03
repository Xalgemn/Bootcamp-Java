var happyNum = 0;
var eatNum = 0;
var fightNum = 0;
var sleepNum = 0;
var playNum = 0;
var eatBarFill = document.getElementById('eatFill');
var playBarFill = document.getElementById('playFill');
var sleepBarFill = document.getElementById('sleepFill');
var fightBarFill = document.getElementById('fightFill');
var happyBarFill = document.getElementById('happinessFill');
var btnEat1 = document.getElementById('eat1');
var btnEat2 = document.getElementById('eat2');
var btnEat3 = document.getElementById('eat3');
var btnPlay1 = document.getElementById('play1');
var btnPlay2 = document.getElementById('play2');
var btnPlay3 = document.getElementById('play3');
var btnFight1 = document.getElementById('fight1');
var btnFight2 = document.getElementById('fight2');
var btnSleep1 = document.getElementById('sleep1');
var btnSleep2 = document.getElementById('sleep2');
var txtEat = document.getElementById('greenPercent');
var txtPlay = document.getElementById('yellowPercent');
var txtFight = document.getElementById('redPercent');
var txtSleep = document.getElementById('bluePercent');
var txtHappiness = document.getElementById('happinessPercent');
btnEat1 === null || btnEat1 === void 0 ? void 0 : btnEat1.addEventListener('click', function () { return UpdateEat(eatNum + 10); });
btnEat2 === null || btnEat2 === void 0 ? void 0 : btnEat2.addEventListener('click', function () { return UpdateEat(eatNum + 20); });
btnEat3 === null || btnEat3 === void 0 ? void 0 : btnEat3.addEventListener('click', function () { return UpdateEat(eatNum + 30); });
btnPlay1 === null || btnPlay1 === void 0 ? void 0 : btnPlay1.addEventListener('click', function () { return UpdatePlay(playNum + 10); });
btnPlay2 === null || btnPlay2 === void 0 ? void 0 : btnPlay2.addEventListener('click', function () { return UpdatePlay(playNum + 20); });
btnPlay3 === null || btnPlay3 === void 0 ? void 0 : btnPlay3.addEventListener('click', function () { return UpdatePlay(playNum + 30); });
btnFight1 === null || btnFight1 === void 0 ? void 0 : btnFight1.addEventListener('click', function () { return updateFight(fightNum + 10); });
btnFight2 === null || btnFight2 === void 0 ? void 0 : btnFight2.addEventListener('click', function () { return updateFight(fightNum + 20); });
btnSleep1 === null || btnSleep1 === void 0 ? void 0 : btnSleep1.addEventListener('click', function () { return updateSleep(sleepNum + 10); });
btnSleep2 === null || btnSleep2 === void 0 ? void 0 : btnSleep2.addEventListener('click', function () { return updateSleep(sleepNum + 20); });
function UpdateEat(percent) {
    if (eatBarFill) {
        var clampedPercentage = Math.max(0, Math.min(percent, 100));
        eatNum = clampedPercentage;
        eatBarFill.style.width = "".concat(clampedPercentage, "%");
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
function UpdatePlay(percent) {
    if (playBarFill) {
        var clampedPercentage = Math.max(0, Math.min(percent, 100));
        playNum = clampedPercentage;
        playBarFill.style.width = "".concat(clampedPercentage, "%");
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
function updateSleep(percent) {
    if (sleepBarFill) {
        var clampedPercentage = Math.max(0, Math.min(percent, 100));
        sleepNum = clampedPercentage;
        sleepBarFill.style.width = "".concat(clampedPercentage, "%");
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
function updateFight(percent) {
    if (fightBarFill) {
        var clampedPercentage = Math.max(0, Math.min(percent, 100));
        fightNum = clampedPercentage;
        fightBarFill.style.width = "".concat(clampedPercentage, "%");
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
        var percent = (eatNum + playNum + sleepNum + fightNum) / 4;
        var clampedPercentage = Math.max(0, Math.min(percent, 100));
        happyBarFill.style.width = "".concat(clampedPercentage, "%");
        txtHappiness.textContent = clampedPercentage + '%' + ' Happy';
    }
}
var Timer = /** @class */ (function () {
    function Timer(counter) {
        if (counter === void 0) { counter = 10; }
        var _this = this;
        this.counter = counter;
        var intervalId = setInterval(function () {
            _this.counter = _this.counter - 1;
            console.log(counter);
            if (_this.counter == 0) {
                clearInterval(intervalId);
                updateFight(fightNum - Math.random() * (20 - 1) + 1);
            }
        }, 1000);
    }
    return Timer;
}());
