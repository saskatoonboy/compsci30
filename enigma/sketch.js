// Enigma
// Eric James
// Sept. Thurs. 12th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let displayWindow = "lightBoard"; // controls when different things are displayed (lightBoard, plugBoard and rotors)
let lampOffColour = [220, 220, 220]; // the colour of a lamp that is off
let lampOnColour = [240, 250, 0]; // the colour of a lamp that is on
let onLamp = ""; // the lamp that is on

let rotors = ["EKMFLGDQVZNTOWYHXUSPAIBRCJ", "AJDKSIRUXBLHWTMCQGZNPYFVOE" ,"BDFHJLCPRTXVZNYEIWGAKMUSQO" ,["ESOVPZJAYQUIRHXLNFTGKDCMWB"] ,["VZBRGITYUPSDNHLXAWMJQOFECK"] ,["JPGVOUMFYQBENHZRDKASXLICTW"] ,["NZJHGRCXMYSWBOUFAIVLPEKQDT"] ,["FKQHTLXOCBJSPDZRAMEWNIUYGV"]];
let currentRotors = [0, 1, 2];
let rotorOffest = [0, 0, 0];

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawWindowButtons(); // draw the buttons for switching windows
  if (displayWindow == "lightBoard") {

    drawLamps(); // if the light board is being displayed then draw the lamps

  } else if (displayWindow == "rotors") {
    
    drawRotors(); // if the rotors are being displayed then draw the rotors

  }
}

// function to draw the lamps
function drawLamps() {
  let firstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]; // order of letters in the first row of lamps
  let secondRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]; // order of letters in the second row of lamps
  let thirdRow = ["z", "x", "c", "v", "b", "n", "m"]; // order of letters in the third row of lamps

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

// function to draw the rotors
function drawRotors() {

  for (let rotorNumber = 0; rotorNumber < 3; rotorNumber ++) {

    // custom rotor shape
    beginShape(LINES);
    // left edge
    vertex(width/6-50 + rotorNumber * width/3, 100);
    vertex(width/6-45 + rotorNumber * width/3, 150);

    vertex(width/6-45 + rotorNumber * width/3, 150);
    vertex(width/6-45 + rotorNumber * width/3, 200);

    vertex(width/6-45 + rotorNumber * width/3, 200);
    vertex(width/6-50 + rotorNumber * width/3, 250);

    // right edge
    vertex(width/6 + rotorNumber * width/3, 100);
    vertex(width/6+5 + rotorNumber * width/3, 150);

    vertex(width/6+5 + rotorNumber * width/3, 150);
    vertex(width/6+5 + rotorNumber * width/3, 200);

    vertex(width/6+5 + rotorNumber * width/3, 200);
    vertex(width/6 + rotorNumber * width/3, 250);

    // horizontal lines
    vertex(width/6-50 + rotorNumber * width/3, 100);
    vertex(width/6 + rotorNumber * width/3, 100);
    
    vertex(width/6-45 + rotorNumber * width/3, 150);
    vertex(width/6+5 + rotorNumber * width/3, 150);
    
    vertex(width/6-45 + rotorNumber * width/3, 200);
    vertex(width/6+5 + rotorNumber * width/3, 200);

    vertex(width/6-50 + rotorNumber * width/3, 250);
    vertex(width/6 + rotorNumber * width/3, 250);
    endShape();

  }

  text(rotors[currentRotors[0]][rotorOffest[0]], width/6-20 + 0 * width/3, 185);
  text(rotors[currentRotors[1]][rotorOffest[1]], width/6-20 + 1 * width/3, 185);
  text(rotors[currentRotors[2]][rotorOffest[2]], width/6-20 + 2 * width/3, 185);

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
