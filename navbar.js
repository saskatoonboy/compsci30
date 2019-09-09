let description = document.getElementById("description");

let firstProjectAnchor = document.getElementById("firstProjectAnchor");
let lineArtAnchor = document.getElementById("lineArtAnchor");

function setText(msg)
{
    description.innerHTML = msg;
};

function resetText()
{
    description.innerHTML = "";
};

firstProjectAnchor.addEventListener("mouseover", function(){
    setText("Rainbow circles get draw on the screen");
});
firstProjectAnchor.addEventListener("mouseout", resetText);

lineArtAnchor.addEventListener("mouseover", function(){
    setText("Line Art Demo");
});
lineArtAnchor.addEventListener("mouseout", resetText);
