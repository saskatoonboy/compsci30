let description = document.getElementById("description");

let demoNavBar = document.getElementById("demos_navbar");
let projectNavBar = document.getElementById("projects_navbar");

let rainbowCirclesAnchor = document.getElementById("rainbowCirclesAnchor");
let lineArtAnchor = document.getElementById("lineArtAnchor");
let imageProcessingAnchor = document.getElementById("imageProcessingAnchor");

let engimaAnchor = document.getElementById("enigmaAnchor");
let evolutionAnchor = document.getElementById("evolutionAnchor");

function setText(msg)
{
    description.innerHTML = msg;
};

function resetText()
{
    description.innerHTML = "";
};

demoNavBar.addEventListener("mouseout", resetText);
projectNavBar.addEventListener("mouseout", resetText);

// Demo Anchors

rainbowCirclesAnchor.addEventListener("mouseover", function(){
    setText("Rainbow circles get draw on the screen");
});

lineArtAnchor.addEventListener("mouseover", function(){
    setText("Line Art Demo");
});

imageProcessingAnchor.addEventListener("mouseover", function(){
    setText("Image Processing Demo");
});

// Project Anchors

engimaAnchor.addEventListener("mouseover", function(){
    setText("Enigma Machine <br> Instructions: <br> <br> Plug board - Click on a socket to create a plug. Click on a plug to remove/place it on a socket. <br> <br> Rotors - Click on a unused rotor to grab it then click in the position you want. Use the scroll wheel to turn the rotors/. <br> <br> Light board - press a key on your keyboard to see what lamp lights up.");
});

evolutionAnchor.addEventListener("mouseover", function(){
    setText("Evolution Simulator");
});
