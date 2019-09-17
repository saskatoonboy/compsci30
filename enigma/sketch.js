// Enigma
// Eric James
// Sept. Thurs. 12th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let displayWindow = "lightBoard";
let lampOffColour = [220, 220, 220];
let lampOnColour = [240, 250, 0];
let onLamp = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawWindowButtons();
  if (displayWindow == "lightBoard") {

    drawLamps();

  } else if (displayWindow == "rotors") {
    
    drawRotors();

  }
}

function drawLamps() {
  let firstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  let secondRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  let thirdRow = ["z", "x", "c", "v", "b", "n", "m"];

  // draw first row
  for (let index=0; index < firstRow.length; index++) {

    // draw lamp
    if (onLamp == firstRow[index]) {
      fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
    } else {
      fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
    }
    circle(80 + index * 160, 180, 50);
    fill(0);
    textSize(32);
    text(firstRow[index].toUpperCase(), 80 + index * 160, 193);

  }

  // draw second row
  for (let index=0; index < secondRow.length; index++) {

    // draw lamp
    if (onLamp == secondRow[index]) {
      fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
    } else {
      fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
    }
    circle(160 + index * 160, 340, 50);
    fill(0);
    textSize(32);
    text(secondRow[index].toUpperCase(), 160 + index * 160, 353);

  }

  // draw third row
  for (let index=0; index < thirdRow.length; index++) {

    // draw lamp
    if (onLamp == thirdRow[index]) {
      fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
    } else {
      fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
    }
    circle(320 + index * 160, 500, 50);
    fill(0);
    textSize(32);
    text(thirdRow[index].toUpperCase(), 320 + index * 160, 513);

  }
}

function drawRotors() {

  beginShape(LINES);
  // left edge
  vertex(100, 100);
  vertex(105, 150);

  vertex(105, 150);
  vertex(105, 200);

  vertex(105, 200);
  vertex(100, 250);

  // right edge
  vertex(150, 100);
  vertex(155, 150);

  vertex(155, 150);
  vertex(155, 200);

  vertex(155, 200);
  vertex(150, 250);

  // horizontal lines
  vertex(100, 100);
  vertex(150, 100);
  
  vertex(105, 150);
  vertex(155, 150);
  
  vertex(105, 200);
  vertex(155, 200);

  vertex(100, 200);
  vertex(150, 200);
  endShape();

}

function drawWindowButtons() {
  textAlign(CENTER);
  textSize(24);
  fill(220);
  if (displayWindow === "lightBoard") {
    rect(width/2-100, height-40, 100, 40);
    rect(width/2, height-40, 100, 40);
    fill(0);
    text("Plugs", width/2-50, height-10);
    text("Rotors", width/2+50, height-10);
  } else if (displayWindow === "plugBoard") {
    rect(width/2-100, height-40, 100, 40);
    rect(width/2, height-40, 100, 40);
    fill(0);
    text("Lights", width/2-50, height-10);
    text("Rotors", width/2+50, height-10);
  } else if (displayWindow === "rotors") {
    rect(width/2-100, height-40, 100, 40);
    rect(width/2, height-40, 100, 40);
    fill(0);
    text("Plugs", width/2-50, height-10);
    text("Lights", width/2+50, height-10);
  } 
}

function getRectClicked(x, y) {
  if (y > height-40) {
    if (x > width/2-100) {
      if (x > width/2) {
        if (x < width/2 + 100) {
          // it is the second button
          return 2;
        }
      } else {
        // it is the first button
        return 1;
      }
    }
  }
  // no button clicked
  return 0;
}

function keyPressed() {
  onLamp = key;
}

function keyReleased() {
  onLamp = "";
}

function mouseClicked() {
  let buttonClicked = getRectClicked(mouseX, mouseY);
  if (buttonClicked == 1) {
    if (displayWindow == "lightBoard") {
      displayWindow = "plugBoard";
    } else if (displayWindow == "plugBoard") {
      displayWindow = "lightBoard";
    } else {
      displayWindow = "plugBoard";
    }
  }else if (buttonClicked == 2) {
    if (displayWindow == "lightBoard") {
      displayWindow = "rotors";
    } else if (displayWindow == "plugBoard") {
      displayWindow = "rotors";
    } else {
      displayWindow = "lightBoard";
    }
  }
}
