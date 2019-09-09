let description = document.getElementById("description");
let firstProjectAnchor = document.getElementById("firstProjectAnchor");
let secondProjectAnchor = document.getElementById("secondProjectAnchor");

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

secondProjectAnchor.addEventListener("mouseover", function(){
    setText("My Second Project");
});
secondProjectAnchor.addEventListener("mouseout", resetText);
