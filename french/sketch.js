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

function preload() {
  binaryImg = loadImage('assets/binary.jfif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  for (let cases = 0; cases < caseCount[page]; cases ++) {
    fill(220);
    rect(width/3*(cases-cases%2)/2+5, height/2*(cases%2)+15, width/3-10, height/2-30);
    if (drawCases[page].length > cases) {
      drawCases[page][cases]();
    }
  }

  fill(255);
  drawEllipses();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawEllipses() {
  for (let ellipseIndex = 0; ellipseIndex < ellipses.length; ellipseIndex ++) {
    ellipseMode(CORNER);
    rotate(ellipses[ellipseIndex][4]);
    ellipse(ellipses[ellipseIndex][0], ellipses[ellipseIndex][1], ellipses[ellipseIndex][2], ellipses[ellipseIndex][3]);
  }
}

function person() {

  ellipses.push([200, 200, 50, 75, 0]);
  ellipses.push([200, 200, 50, 75, 90]);
  ellipses.push([200, 200, 50, 75, 180]);
  ellipses.push([200, 200, 50, 75, 270]);

}

function mouseClicked() {
  person()
}
