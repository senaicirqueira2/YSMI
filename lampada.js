// acessando os ids
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');


//função ligar
function lampOn() {
    lamp.src = './img/ligada.jpg';
}

//função desligar
function lampOff() {
    lamp.src = './img/desligada.jpg';
}

//função quebrar
function lampBroken() {
    lamp.src = './img/quebrada.jpg';
}
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
