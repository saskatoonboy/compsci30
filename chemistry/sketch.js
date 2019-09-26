// ChemistryClicker
// Eric James
// Sept. Thurs. 26th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  if (state === 0) {
    fill(0, 255, 0);
    rect(width / 2 - width / 10, height / 2 - height / 20, width / 5, height / 10);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(32)
    text("Play", width / 2, height / 2);
  }
}

function mouseClicked() {
  if (state === 0) {
    if (mouseX >= width / 2 - width / 10 && mouseX <= width / 2 + width / 10) {
      if (mouseY >= height / 2 - height / 20 && mouseY <= height / 2 + height / 20) {
        state = 1;
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
