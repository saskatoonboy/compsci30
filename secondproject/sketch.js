// First Project
// Eric James
// Sept. Thrus. 5th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function preload() {
  img = loadImage("assets/Asia.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill(0);
  ellipse(mouseX, mouseY, 100, 100);
  image(img, 0, 0);
}
