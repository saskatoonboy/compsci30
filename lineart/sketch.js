// Line Art
// Eric James
// Sept. Mon. 9th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  line(mouseX, mouseY, pmouseX, pmouseY);
}
