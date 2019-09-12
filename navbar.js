let description = document.getElementById("description");

let demoNavBar = document.getElementById("demos_navbar");
let projectNavBar = document.getElementById("projects_navbar");

let rainbowCirclesAnchor = document.getElementById("rainbowCirclesAnchor");
let lineArtAnchor = document.getElementById("lineArtAnchor");

let engimaAnchor = document.getElementById("enigmaAnchor");

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

// Project Anchors

engimaAnchor.addEventListener("mouseover", function(){
    setText("Enigma Machine");
});
