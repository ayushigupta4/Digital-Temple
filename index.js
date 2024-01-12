const movingPlate = document.getElementById('aarti1');
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;
const radius = 200;
let angle = 0;
var dropdown = document.getElementById("myDropdown");


function showImage(){

    
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    var image = document.getElementById("imageDisplay");

    if(selectedOption == "krishna")
        image.src = "./images/krishna.jpg";
    else if(selectedOption == "mahadev")
        image.src = "./images/mahadev.jpg";
    else if(selectedOption == "ram")
        image.src = "./images/ram-sita.webp";
    else if(selectedOption == "ganesha")
        image.src = "./images/ganesha.png";
    else if(selectedOption == "lakshmi")
        image.src = "./images/lakshmi-devi.jpg";
    else if(selectedOption == "bajrang-bali")
        image.src = "./images/bajrang-bali.webp";
    else
        image.src = "";

}

function pray(){
    document.getElementById('pray1').style.display = "initial";
    document.getElementById('pray2').style.display = "initial";
    document.getElementById('aarti1').style.display = "none";
}

function aarti(){
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;

    document.getElementById('pray1').style.display = "none";
    document.getElementById('pray2').style.display = "none";
    document.getElementById('aarti1').style.display = "initial";

    movePlate();

    var audio;

    if(selectedOption == "krishna")
        audio = new Audio('./audios/krishna-aarti.mp3');
    else if(selectedOption == "mahadev")
        audio = new Audio('./audios/shivji-aarti.mp3');
    else if(selectedOption == "ram")
        audio = new Audio('./audios/ram-aarti.mp3');
    else if(selectedOption == "ganesha")
        audio = new Audio('./audios/ganesh-aarti.mp3');
    else if(selectedOption == "lakshmi")
        audio = new Audio('./audios/lakshmi-aarti.mp3');
    else if(selectedOption == "bajrang-bali")
        audio = new Audio('./audios/hanuman-aarti.mp3');
    else
        audio = new Audio('');

    audio.play();
}

function movePlate() {
    const x = centerX + radius*Math.cos(angle);
    const y = centerY + radius*Math.sin(angle);

    movingPlate.style.left = x + 'px';
    movingPlate.style.top = y + 'px';

    angle += 0.01;
    requestAnimationFrame(movePlate);
}

function meditate(){
    document.getElementById('pray1').style.display = "none";
    document.getElementById('pray2').style.display = "none";
    document.getElementById('aarti1').style.display = "none";

    var audio = new Audio('./audios/meditation.mp3');
    audio.play();
}

function donate(){
    document.getElementById('pray1').style.display = "none";
    document.getElementById('pray2').style.display = "none";
    document.getElementById('aarti1').style.display = "none";

    alert("Not taking Donations currently. Thank you for consideration!")
}

