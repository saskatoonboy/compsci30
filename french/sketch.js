// Line Art
// Eric James
// Sept. Mon. 9th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let binaryImg;

function preload() {
  binaryImg = loadImage('assets/binary.jfif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  fill(220);
  for (let cases = 0; cases < 12; cases ++) {
    rect(300*cases/2, 200*cases%2, 200, 100);
  }
}
