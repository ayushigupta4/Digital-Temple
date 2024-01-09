function showImage(){
    var dropdown = document.getElementById("myDropdown");
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
    else if(selectedOption == "saraswati")
        image.src = "./images/saraswati.jpg";
    else if(selectedOption == "bajrang-bali")
        image.src = "./images/bajrang-bali.webp";
    else
        image.src = "";

}

function pray(){
    document.getElementById('pray1').style.display = "initial";
    document.getElementById('pray2').style.display = "initial";
    document.getElementById('aarti1').style.display = "none";
    document.getElementById('aarti2').style.display = "none";
}

function aarti(){
    document.getElementById('pray1').style.display = "none";
    document.getElementById('pray2').style.display = "none";
    document.getElementById('aarti1').style.display = "initial";
    document.getElementById('aarti2').style.display = "initial";
}

function meditate(){
    document.getElementById('pray1').style.display = "none";
    document.getElementById('pray2').style.display = "none";
    document.getElementById('aarti1').style.display = "none";
    document.getElementById('aarti2').style.display = "none";

    var audio = new Audio('./audios/meditation.mp3');
    audio.play();
}

function donate(){
    document.getElementById('pray1').style.display = "none";
    document.getElementById('pray2').style.display = "none";
    document.getElementById('aarti1').style.display = "none";
    document.getElementById('aarti2').style.display = "none";

    alert("Not taking Donations currently. Thank you for consideration!")
}
