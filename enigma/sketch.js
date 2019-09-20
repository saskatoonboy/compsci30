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

let rotors = [[4, 10, 12, 5, 11, 6, 3, 16, 21, 25, 13, 19, 14, 22, 24, 7, 23, 20, 18, 15, 0, 8, 1, 17, 2, 9], 
  [0, 9, 3, 10, 18, 8, 17, 20, 23, 1, 11, 7, 22, 19, 12, 2, 16, 6, 25, 13, 15, 24, 5, 21, 14, 4], 
  [1, 3, 5, 7, 9, 11, 2, 15, 17, 19, 23, 21, 25, 13, 24, 4, 8, 22, 6, 0, 10, 12, 20, 18, 16, 14],
  [4, 18, 14, 21, 15, 25, 9, 0, 24, 16, 20, 8, 17, 7, 23, 11, 13, 5, 19, 6, 10, 3, 2, 12, 22, 1],
  [21, 25, 1, 17, 6, 8, 19, 24, 20, 15, 18, 3, 13, 7, 11, 23, 0, 22, 12, 9, 16, 14, 5, 4, 2, 10],
  [9, 15, 6, 21, 14, 20, 12, 5, 24, 16, 1, 4, 13, 7, 25, 17, 3, 10, 0, 18, 23, 11, 8, 2, 19, 22],
  [13, 25, 9, 7, 6, 17, 2, 23, 12, 24, 18, 22, 1, 14, 20, 5, 0, 8, 21, 11, 15, 4, 10, 16, 3, 19],
  [5, 10, 16, 7, 19, 11, 23, 14, 2, 1, 9, 18, 15, 3, 25, 17, 0, 12, 4, 22, 13, 8, 20, 24, 6, 21]];
let currentRotors = [0, 1, 2];
let rotorOffset = [0, 0, 0];

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";


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


// Light Board


// function to draw the lamps
function drawLamps() {
  let firstRow = "QWERTYUIOP"; // order of letters in the first row of lamps
  let secondRow = "ASDFGHJKL"; // order of letters in the second row of lamps
  let thirdRow = "ZXCVBNM"; // order of letters in the third row of lamps

  // draw first row
  for (let index=0; index < firstRow.length; index++) {

    // draw lamp
    if (onLamp == firstRow[index]) {
      fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
    } else {
      fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
    }
    circle(width/20 + index * width/10, 180, 50);
    fill(0);
    textSize(32);
    text(firstRow[index], width/20 + index * width/10, 193);

  }

  // draw second row
  for (let index=0; index < secondRow.length; index++) {

    // draw lamp
    if (onLamp == secondRow[index]) {
      fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
    } else {
      fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
    }
    circle(width/10 + index * width/10, 340, 50);
    fill(0);
    textSize(32);
    text(secondRow[index], width/10 + index * width/10, 353);

  }

  // draw third row
  for (let index=0; index < thirdRow.length; index++) {

    // draw lamp
    if (onLamp == thirdRow[index]) {
      fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
    } else {
      fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
    }
    
    circle(width/5 + index * width/10, 500, 50);
    fill(0);
    textSize(32);
    text(thirdRow[index], width/5 + index * width/10, 513);

  }
}


// Rotors


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

  // rotor letters
  for (let rotor = 0; rotor < 3; rotor ++) {
    for (let offset = 1; offset >= -1; offset --) {
      let totalOffset = rotorOffset[rotor]+offset;
      if (totalOffset < 0) {
        totalOffset += 26;
      } else if (totalOffset > 25) {
        totalOffset -= 26;
      }
      text(alphabet[rotors[currentRotors[rotor]][totalOffset]], width/6-25+width/3*rotor, 185 - offset * 50);
    }
  }
}

function moveRotor(rotor, amount) {
  rotorOffset[rotor-1] += amount;
  if (rotorOffset[rotor-1] < 0) {
    rotorOffset[rotor-1] += 26;
  } else if (rotorOffset[rotor-1] > 25) {
    rotorOffset[rotor-1] -= 26;
  }
}

function moveRotors() {
  moveRotor(1, 1);
  print(rotorOffset[0]);
  if (rotorOffset[0] === 26) {
    moveRotor(2, 1);
    if (rotorOffset[1] === 26) {
      moveRotor(3, 1);
    }
  }
}

function getSelectedRotor() {
  for (let rotorNumber = 0; rotorNumber < 3; rotorNumber ++) {
    if (mouseX >= width/6-50 + rotorNumber * width/3 && mouseX <= width/6+5 + rotorNumber * width/3 && mouseY >= 100 && mouseY <= 250) {
      return rotorNumber + 1;
    }
  }
}

function getRotorEncryption(rotor, forward, char) {

  let rotorStrip = rotors[currentRotors[rotor-1]];

  if (forward) {
    let rotorStripIndex = char+rotorOffset[rotor-1];
    print(rotorStripIndex);
    if (rotorStripIndex < 0) {
      rotorStripIndex += 26;
    } else if (rotorStripIndex > 25) {
      rotorStripIndex -= 26;
    }
    print(rotorStripIndex);
    print(rotorStrip[rotorStripIndex]);
    return (rotorStrip[rotorStripIndex]);
  } else {
    rotorStripIndex = rotorStrip.indexOf(char)+26;
    print(rotorStripIndex);
    rotorStripIndex -= rotorOffset[rotor-1];
    print(rotorStripIndex);
    print(rotorOffset[rotor-1]);
    return (alphabet[rotorStripIndex]);
  }

}


// reflector

let reflector = [24, 17, 20, 7, 16, 18, 11, 3, 15, 23, 13, 6, 14, 10, 12, 8, 4, 1, 5, 25, 2, 22, 21, 9, 0, 19];

function getReflected(char) {
  return (reflector[char]);
}

// window buttons


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


// user input


function keyPressed() {
  if (displayWindow === "lightBoard") {
    moveRotors();
    print("Key pressed: " + key)
    let letter = getRotorEncryption(1, true, alphabet.indexOf(key.toUpperCase()));
    print("First Rotor: " + letter)
    letter = getRotorEncryption(2, true, letter);
    print("Second Rotor: " + letter)
    letter = getRotorEncryption(3, true, letter);
    print("Third Rotor: " + letter)
    letter = getReflected(letter);
    print("Reflector: " + letter)
    letter = getRotorEncryption(3, false, letter);
    print("Third Rotor: " + letter)
    letter = getRotorEncryption(2, false, letter);
    print("Second Rotor: " + letter)
    letter = getRotorEncryption(1, false, letter);
    print("First Rotor: " + letter)
    onLamp = letter;
  }
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let scrollCount = 0;

function mouseWheel(event) {
  scrollCount += event.delta;
  print(scrollCount);
  if (scrollCount >= 100) {
    moveRotor(getSelectedRotor(), (scrollCount-scrollCount%100)/100);
    scrollCount -= 100;
  } else if (scrollCount <= -100) {
    moveRotor(getSelectedRotor(), (scrollCount-scrollCount%100)/100);
    scrollCount += 100;
  }
  return false;
}
