var mic;
var dist;

function setup() {

    noCanvas();

    mic = new p5.AudioIn();
    dist = new p5.Distortion();
    
    const startButton = select('#startButton');
    startButton.mousePressed(startMic);

    const driveButton = select('#driveButton');
    driveButton.mousePressed(driveselect);

}

const powerbtn = document.querySelector('.power');

var powerToggle = 0

function startMic(){
    if (powerToggle == 0) {
        mic.start();
        mic.connect();
        powerbtn.style.backgroundImage = 'url(img/lightandpoweron.svg)';
        powerToggle = 1;
    }else if (powerToggle == 1){
        mic.disconnect();
        powerbtn.style.backgroundImage = 'url(img/lightandpoweroff.svg)';
        powerToggle = 0;
    }
    
}

const driveselectbtn = document.querySelector('.drive-btn')

var disttoggle = 0

function driveselect(){
    if (disttoggle == 0) {
        if(powerToggle == 1){
            mic.connect(dist)
        }
        
        driveselectbtn.style.top = '-0.1rem'
        disttoggle = 1
    }else if (disttoggle == 1) {
        mic.disconnect(dist)
        if(powerToggle == 1){
            mic.connect();
        }
        driveselectbtn.style.top = '-0.2rem'
        disttoggle = 0
    }
}

const hrzalert = document.querySelector('.hrzalert')

function closehrzalert(){
    hrzalert.style.display = 'none'
}