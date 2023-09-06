const turnOn = document.getElementById( 'turnOn' );
const turnOff = document.getElementById( 'turnOff' );
const lamp = document.getElementById( 'lamp' );
const lampNew = document.getElementById('tcLamp');




function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken ()) {
        lamp.src='./img/ligada.png';
        lamp.style.backgroundColor = "black";
    }
}

function lampOff() {
    if (!isLampBroken ()) {
        lamp.src='./img/desligada.png';
        lamp.style.backgroundColor = "cornflowerblue";
    }
}

function lampBroken(){
    lamp.src='./img/quebada.png';
    lamp.style.backgroundColor = "beige";
}

function lampNova(){
    lamp.src='./img/ligada.png';
    lamp.style.backgroundColor = "black";
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
turnOn.addEventListener('dblclick',lampBroken);
lampNew.addEventListener('click', lampNova);
lamp.addEventListener('dblclick',lampBroken);
lamp.addEventListener('click',lampNova)