// Enigma
// Eric James
// Sept. Thurs. 12th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let displayWindow = "lightBoard";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  textAlign(CENTER);
  if (displayWindow === "lightBoard") {
    text("Light Board", width/2, height/2);
    rect(width/2-50, height-20, 100, 20);
    rect(width/2+50, height-20, 100, 20);
  } else if (displayWindow === "plugBoard") {
    text("Plug Board", width/2, height/2);
    rect(width/2-50, height-20, 100, 20);
    rect(width/2+50, height-20, 100, 20);
  } else if (displayWindow === "wheels") {
    text("Wheels", width/2, height/2);
    rect(width/2-50, height-20, 100, 20);
    rect(width/2+50, height-20, 100, 20);
  } 
}

function drawButtons() {
  
}
