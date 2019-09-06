// First Project
// Eric James
// Sept. Thrus. 5th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let red = 0;
let green = 0;
let blue = 0;
let redChange = 0;
let greenChange = 0;
let blueChange = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 255, 0);
}

function draw() {
  fill(red, green, blue);
  noStroke();
  if (red === 255 && blue === 255) {
    blueChange = -1;
    redChange = 0;
  } else if (red === 255 && blue === 0 && green === 0) {
    blueChange = 0;
    greenChange = 1;
  } else if (red === 255 && green === 255) {
    redChange = -1;
    greenChange = 0;
  } else if (red === 0 && green === 255) {
    redChange = 0;
    blueChange = 1;
  } else if (green === 255 && blue === 255) {
    greenChange = -1;
    blueChange = 0;
  } else if (blue === 255 && green === 0) {
    redChange = 1;
    greenChange = 0;
  }
  red += redChange;
  green += greenChange;
  blue += blueChange;
  ellipse(mouseX, mouseY, 100, 100);
  console.log(red, green, blue);
}
