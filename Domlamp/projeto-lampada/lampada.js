const turnOn = document.getElementById( 'turnOn' );
const turnOff = document.getElementById( 'turnOff' );
const lamp = document.getElementById( 'lamp' );
const lampNew = document.getElementById('tcLamp')
const btn = document.getElementById('btn')

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken ()) {
        lamp.src='./img/ligada.jpg';
        
    }
}

function lampOff() {
    if (!isLampBroken ()) {
        lamp.src='./img/desligada.jpg';
    }
}

function lampBroken(){
    lamp.src='./img/quebrada.jpg';
}

function lampNova(){
    lamp.src='./img/ligada.jpg';
}


turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
turnOn.addEventListener('dblclick',lampBroken);
lampNew.addEventListener('click', lampNova);


lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick',lampBroken);
lamp.addEventListener('click',lampNova)