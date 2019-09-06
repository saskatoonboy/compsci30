let description = document.getElementById("description");
let firstProjectAnchor = document.getElementById("firstProjectAnchor");

function setText()
{
    description.innerHTML = "hi";
};

function resetText()
{
    description.innerHTML = "";
};

firstProjectAnchor.addEventListener("mouseover", setText);
firstProjectAnchor.addEventListener("mouseout", resetText);
