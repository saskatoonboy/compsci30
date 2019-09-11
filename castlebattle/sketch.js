// Castle Battle
// Eric James
// Sept. Wed. 11th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// [isVisible, xPos, yPos, size, colour, xVol, yVol]
let cannonBall = [true, 100, 600, 20, [255, 0, 0], 8, 10]

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 100, 200);
  fill(50, 250, 0);
  rect(0, height-200, width, height);
  cannonBall[1] += cannonBall[5];
  cannonBall[2] -= cannonBall[6];
  if (cannonBall[0]) {
    fill(cannonBall[4][0], cannonBall[4][1], cannonBall[4][2])
    circle(cannonBall[1], cannonBall[2], cannonBall[3]);
  }
  gravity();
}

function gravity() {
  cannonBall[6] -= 0.1;
}
