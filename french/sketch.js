// Line Art
// Eric James
// Sept. Mon. 9th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let binaryImg;
let drawCases = [[case00], [case10]]
let page = 0;
let caseCount = [5, 5];

function preload() {
  binaryImg = loadImage('assets/binary.jfif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  fill(220);
  for (let cases = 0; cases < caseCount[page]; cases ++) {
    rect(width/3*(cases-cases%2)/2+5, height/2*(cases%2)+15, width/3-10, height/2-30);
    if (drawCases[page].length > cases) {
      drawCases[page][cases]();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function person(x, y) {

  ellipse(x, y, 100, 200)

}

function case00() {
  fill(255);
  person(100, 100);
}

function case10() {
  circle(100, 100, 100, 100);
}
