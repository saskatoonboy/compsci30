// Line Art
// Eric James
// Sept. Mon. 9th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let binaryImg;
let drawCases = [[],[],[]]
let page = 0;
let caseCount = [5, 5];
let ellipses = [];
let control = "1";

function preload() {
  binaryImg = loadImage('assets/binary.jfif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  
  drawCreature();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
