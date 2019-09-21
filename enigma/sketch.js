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

// the rotor wirings in order
let rotors = [[4, 10, 12, 5, 11, 6, 3, 16, 21, 25, 13, 19, 14, 22, 24, 7, 23, 20, 18, 15, 0, 8, 1, 17, 2, 9], 
  [0, 9, 3, 10, 18, 8, 17, 20, 23, 1, 11, 7, 22, 19, 12, 2, 16, 6, 25, 13, 15, 24, 5, 21, 14, 4], 
  [1, 3, 5, 7, 9, 11, 2, 15, 17, 19, 23, 21, 25, 13, 24, 4, 8, 22, 6, 0, 10, 12, 20, 18, 16, 14],
  [4, 18, 14, 21, 15, 25, 9, 0, 24, 16, 20, 8, 17, 7, 23, 11, 13, 5, 19, 6, 10, 3, 2, 12, 22, 1],
  [21, 25, 1, 17, 6, 8, 19, 24, 20, 15, 18, 3, 13, 7, 11, 23, 0, 22, 12, 9, 16, 14, 5, 4, 2, 10],
  [9, 15, 6, 21, 14, 20, 12, 5, 24, 16, 1, 4, 13, 7, 25, 17, 3, 10, 0, 18, 23, 11, 8, 2, 19, 22],
  [13, 25, 9, 7, 6, 17, 2, 23, 12, 24, 18, 22, 1, 14, 20, 5, 0, 8, 21, 11, 15, 4, 10, 16, 3, 19],
  [5, 10, 16, 7, 19, 11, 23, 14, 2, 1, 9, 18, 15, 3, 25, 17, 0, 12, 4, 22, 13, 8, 20, 24, 6, 21]];
let currentRotors = [0, 1, 2]; // the order of the currently selected rotors
let rotorOffset = [0, 0, 0]; // the amount that each rotor has been turned
let selectedRotor = -1; // the rotor that is on the cursor

// the alphabet
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";

// function to setup p5js
function setup() {

  createCanvas(windowWidth, windowHeight);

}

// polygon function from p5js examples
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// draw function from p5js
function draw() {

  background(220);
  drawWindowButtons(); // draw the buttons for switching windows

  if (displayWindow == "lightBoard") {

    drawLamps(); // if the light board is being displayed then draw the lamps

  } else if (displayWindow == "rotors") {
    
    drawRotors(); // if the rotors are being displayed then draw the rotors

  } else {

    drawPlugs();

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

  // array of romain numberals
  let romainNumberals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  
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

      // the index for rotorRotors is 2-rotor so that the first rotor is on the far right
      let totalOffset = rotorOffset[2-rotor]+offset;

      if (totalOffset < 0) {

        totalOffset += 26;

      } else if (totalOffset > 25) {

        totalOffset -= 26;

      }
      
      // print the letter for the rotor. the index for currentRotors is 2-rotor so that the first rotor is on the far right
      text(alphabet[rotors[currentRotors[2-rotor]][totalOffset]], width/6-25+width/3*rotor, 185 - offset * 50);
    }

    // write the romain numeral for the rotor
    text(romainNumberals[currentRotors[2-rotor]], width/6-25+width/3*rotor, 85);

  }

  // draw unused rotors
  for (let rotorNumber = 0; rotorNumber < 8; rotorNumber ++) {

    if (rotorNumber === selectedRotor) {

      fill(180);
      polygon(mouseX, mouseY, width/20, 12);
      
      fill(220);
      polygon(mouseX, mouseY, width/20 - 5, 12);
      
      fill(0);
      textSize(36);
      text(romainNumberals[rotorNumber], mouseX, mouseY + height/50);

    } else if (currentRotors.indexOf(rotorNumber) === -1) {

      fill(180);
      polygon(width/20*7 + (rotorNumber - rotorNumber % 2) / 2 * width/10, height/2 + rotorNumber % 2 * width/10, width/20, 12);
      
      fill(220);
      polygon(width/20*7 + (rotorNumber - rotorNumber % 2) / 2 * width/10, height/2 + rotorNumber % 2 * width/10, width/20 - 5, 12);
      
      fill(0);
      textSize(36);
      text(romainNumberals[rotorNumber], width/20*7 + (rotorNumber - rotorNumber % 2) / 2 * width/10, height/25*13 + rotorNumber % 2 * width/10);
    }
  }

}

// function to move a specific rotor a designated amount
function moveRotor(rotor, amount) {

  rotorOffset[rotor-1] += amount;

  if (rotorOffset[rotor-1] < 0) {

    rotorOffset[rotor-1] += 26;

  } else if (rotorOffset[rotor-1] > 25) {

    rotorOffset[rotor-1] -= 26;

  }
}

// function for moving the rotors like an odometer
function moveRotors() {

  moveRotor(1, 1);

  if (rotorOffset[0] === 0) {

    moveRotor(2, 1);

    if (rotorOffset[1] === 0) {

      moveRotor(3, 1);

    }
  }
}

// function that returns the number of the rotor that is currently selected or 0 if none are selcted
function getSelectedRotor() {

  for (let rotorNumber = 0; rotorNumber < 3; rotorNumber ++) {

    if (mouseX >= width/6-50 + rotorNumber * width/3 && mouseX <= width/6+5 + rotorNumber * width/3 && mouseY >= 100 && mouseY <= 250) {
      
      // return (rotorNumber - 3) * -1 so that the first rotor is on the far right
      return (rotorNumber - 3) * -1;

    }
  }
  
  return 0;

}

// check if one of the unused rotors was clicked on
function getClickedRotor(x, y) {

  if (y >= height/2-width/20) {

    // first row of rotors
    if (y <= height/2+width/20) {

      if (x >= width/10*3) {

        // first rotor
        if (x <= width/5*2) {
          
          if (selectedRotor === 0) {
            selectedRotor = -1;
          } else if (currentRotors.indexOf(0) === -1) {
            selectedRotor = 0;
          }

          print(1);

        // third rotor
        } else if (x <= width/2) {

          if (selectedRotor === 2) {
            selectedRotor = -1;
          } else if (currentRotors.indexOf(2) === -1) {
            selectedRotor = 2;
          }

          print(3);

        // fifth rotor
        } else if (x <= width/5*3) {

          if (selectedRotor === 4) {
            selectedRotor = -1;
          } else if (currentRotors.indexOf(4) === -1) {
            selectedRotor = 4;
          }

          print(5);
          
        // seventh rotor
        } else if (x <= width/10*7) {

          if (selectedRotor === 6) {
            selectedRotor = -1;
          } else if (currentRotors.indexOf(6) === -1) {
            selectedRotor = 6;
          }

          print(7);
          
        }
      }

    // second row of rotors
    } else if (y <= height/2+width/20*3){

      if (x >= width/10*3) {

        // second rotor
        if (x <= width/5*2) {

          if (selectedRotor === 1) {
            selectedRotor = -1;
          } else if (currentRotors.indexOf(1) === -1) {
            selectedRotor = 1;
          }

          print(2);
          
        // fourth rotor
        } else if (x <= width/2) {

          if (selectedRotor === 3) {
            selectedRotor = -1;
          } else if (currentRotors.indexOf(3) === -1) {
            selectedRotor = 3;
          }

          print(4);
          
        // sixth rotor
        } else if (x <= width/5*3) {

          if (selectedRotor === 5) {
            selectedRotor = -1;
          } else if (currentRotors.indexOf(5) === -1) {
            selectedRotor = 5;
          }

          print(6);
          
        // eighth rotor
        } else if (x <= width/10*7) {

          if (selectedRotor === 7) {
            selectedRotor = -1;
          } else if (currentRotors.indexOf(7) === -1) {
            selectedRotor = 7;
          }

          print(8);
        }
      }
    }
  }
}

// get the value that comes out of a rotor using the parameters of which rotor, the direction of the current, and the letter the current is flowing through
function getRotorEncryption(rotor, forward, char) {

  let rotorStrip = rotors[currentRotors[rotor-1]];

  if (forward) {

    let rotorStripIndex = char+rotorOffset[rotor-1];

    if (rotorStripIndex < 0) {

      rotorStripIndex += 26;

    } else if (rotorStripIndex > 25) {

      rotorStripIndex -= 26;

    }

    return (rotorStrip[rotorStripIndex]);

  } else {

    let rotorStripIndex = rotorStrip.indexOf(char);
    rotorStripIndex -= rotorOffset[rotor-1];

    if (rotorStripIndex < 0) {

      rotorStripIndex += 26;
    } else if (rotorStripIndex > 25) {

      rotorStripIndex -= 26;
    }

    return rotorStripIndex;
  }

}


// reflector

// wiring of the reflector
let reflector = [24, 17, 20, 7, 16, 18, 11, 3, 15, 23, 13, 6, 14, 10, 12, 8, 4, 1, 5, 25, 2, 22, 21, 9, 0, 19];

// function to get the character that a different character is wired to
function getReflected(char) {

  return (reflector[char]);

}


// window buttons


// function to draw the buttons used to switch windows
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

    text("Rotors", width/2-50, height-10);
    text("Lights", width/2+50, height-10);

  } else if (displayWindow === "rotors") {

    rect(width/2-100, height-40, 100, 40);
    rect(width/2, height-40, 100, 40);

    fill(0);

    text("Lights", width/2-50, height-10);
    text("Plugs", width/2+50, height-10);
  } 
}

// function to get which of the window navigation buttons was clicked
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


// plugboard


let plugs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]; // where each plug connects
let firstPlugRow = "QWERTYUIOP"; // order of letters in the first row of plugs
let secondPlugRow = "ASDFGHJKL"; // order of letters in the second row of plugs
let thirdPlugRow = "ZXCVBNM"; // order of letters in the third row of plugs
let selectedPlug = -1;

function getPlug(char) {

  return plugs[char];

}

function getClickedPlug(x, y) {

  // first row
  if (y >= 130 && y <= 230) {

    for (let index=0; index < firstPlugRow.length; index++) {

      if (x >= width/20 + index * width/10 - 25 && x <= width/20 + index * width/10 + 25) {

        return alphabet.indexOf(firstPlugRow[index]);

      }
    }
  }

  // second row
  if (y >= 290 && y <= 390) {

    for (let index=0; index < secondPlugRow.length; index++) {

      if (x >= width/10 + index * width/10 - 25 && x <= width/10 + index * width/10 + 25) {

        return alphabet.indexOf(secondPlugRow[index]);
        
      }
    }
  }

  // third row
  if (y >= 450 && y <= 550) {

    for (let index=0; index < thirdPlugRow.length; index++) {

      if (x >= width/5 + index * width/10 - 25 && x <= width/5 + index * width/10 + 25) {

        return alphabet.indexOf(thirdPlugRow[index]);
        
      }
    }
  }

  return -1;
}

function drawPlugs() {

  // draw first row
  for (let index=0; index < firstPlugRow.length; index++) {

    // draw plug

    if (plugs[alphabet.indexOf(firstPlugRow[index])] === alphabet.indexOf(firstPlugRow[index])) {

      fill(220);

    } else {

      fill(0);

    }

    rect(width/20 + index * width/10 - 25, 130, 50, 100);

    circle(width/20 + index * width/10, 160, 20);
    circle(width/20 + index * width/10, 200, 20);

    fill(0);
    textSize(32);
    text(firstPlugRow[index], width/15 + index * width/10 - 25, 120);

    if (plugs[alphabet.indexOf(firstPlugRow[index])] !== alphabet.indexOf(firstPlugRow[index])) {

      fill(255);
      text(alphabet[plugs[alphabet.indexOf(firstPlugRow[index])]], width/15 + index * width/10 - 25, 190);

    }
  }

  // draw second row
  for (let index=0; index < secondPlugRow.length; index++) {

    // draw plug


    if (plugs[alphabet.indexOf(secondPlugRow[index])] === alphabet.indexOf(secondPlugRow[index])) {

      fill(220);

    } else {

      fill(0);

    }

    rect(width/10 + index * width/10 - 25, 290, 50, 100);

    circle(width/10 + index * width/10, 320, 20);
    circle(width/10 + index * width/10, 360, 20);

    fill(0);
    textSize(32);
    text(secondPlugRow[index], width/60 * 7 + index * width/10 - 25, 280);

    if (plugs[alphabet.indexOf(secondPlugRow[index])] !== alphabet.indexOf(secondPlugRow[index])) {

      fill(255);
      text(alphabet[plugs[alphabet.indexOf(secondPlugRow[index])]], width/60 * 7 + index * width/10 - 25, 350);

    }
  }

  // draw third row
  for (let index=0; index < thirdPlugRow.length; index++) {

    // draw plug
    

    if (plugs[alphabet.indexOf(thirdPlugRow[index])] === alphabet.indexOf(thirdPlugRow[index])) {

      fill(220);

    } else {

      fill(0);

    }

    rect(width/5 + index * width/10 - 25, 450, 50, 100);

    circle(width/5 + index * width/10, 480, 20);
    circle(width/5 + index * width/10, 520, 20);

    fill(0);
    textSize(32);
    text(thirdPlugRow[index], width/60 * 13 + index * width/10 - 25, 440);

    if (plugs[alphabet.indexOf(thirdPlugRow[index])] !== alphabet.indexOf(thirdPlugRow[index])) {

      fill(255);
      text(alphabet[plugs[alphabet.indexOf(thirdPlugRow[index])]], width/60 * 13 + index * width/10 - 25, 510);

    }
  }

  // drawing the cables
  beginShape(LINES);
  for (let socket = 0; socket < 26; socket ++) {

    if (plugs[socket] !== socket && plugs[socket] < socket) {

      let socketLetter = alphabet[socket];
      let plugLetter = alphabet[plugs[socket]];

      print(socketLetter, plugLetter);

      if (firstPlugRow.indexOf(socketLetter) > -1) {
        vertex(width/20 + firstPlugRow.indexOf(socketLetter) * width/10, 230);
      } else if (secondPlugRow.indexOf(socketLetter) > -1) {
        vertex(width/10 + secondPlugRow.indexOf(socketLetter) * width/10, 390);
      } else if (thirdPlugRow.indexOf(socketLetter) > -1) {
        vertex(width/5 + thirdPlugRow.indexOf(socketLetter) * width/10, 550);
      }

      if (firstPlugRow.indexOf(plugLetter) > -1) {
        vertex(width/20 + firstPlugRow.indexOf(plugLetter) * width/10, 230);
      } else if (secondPlugRow.indexOf(plugLetter) > -1) {
        vertex(width/10 + secondPlugRow.indexOf(plugLetter) * width/10, 390);
      } else if (thirdPlugRow.indexOf(plugLetter) > -1) {
        vertex(width/5 + thirdPlugRow.indexOf(plugLetter) * width/10, 550);
      }
    }
  }
  endShape();
}

// user input


// p5js key pressed function
function keyPressed() {

  if (displayWindow === "lightBoard") {
    
    moveRotors();

    let letter = getPlug(alphabet.indexOf(key.toUpperCase()));

    letter = getRotorEncryption(1, true, letter);

    letter = getRotorEncryption(2, true, letter);

    letter = getRotorEncryption(3, true, letter);

    letter = getReflected(letter);

    letter = getRotorEncryption(3, false, letter);

    letter = getRotorEncryption(2, false, letter);

    letter = getRotorEncryption(1, false, letter);

    letter = getPlug(letter);

    onLamp = alphabet[letter];

  }
}

// p5js key released function
function keyReleased() {

  onLamp = "";

}

// p5js mouse clicked function
function mouseClicked() {

  let buttonClicked = getRectClicked(mouseX, mouseY);

  if (buttonClicked == 1) {

    if (displayWindow == "lightBoard") {

      displayWindow = "plugBoard";

    } else if (displayWindow == "plugBoard") {

      displayWindow = "rotors";

    } else {

      displayWindow = "lightBoard";

    }
  }else if (buttonClicked == 2) {

    if (displayWindow == "lightBoard") {

      displayWindow = "rotors";

    } else if (displayWindow == "plugBoard") {

      displayWindow = "lightBoard";

    } else {
      displayWindow = "plugBoard";
    }
  }

  // swaping the used rotors
  if (displayWindow === "rotors") {

    let clickedRotor = getSelectedRotor(mouseX, mouseY);

    if (clickedRotor > 0 && selectedRotor > -1) {

      let oldRotor = currentRotors[clickedRotor-1];
      currentRotors[clickedRotor-1] = selectedRotor;
      selectedRotor = oldRotor;

    } else {

      print(selectedRotor);
      getClickedRotor(mouseX, mouseY);

    }

  } else if (displayWindow === "plugBoard") {
    let clickedPlug = getClickedPlug(mouseX, mouseY);

    if (clickedPlug > -1) {

      if (plugs[alphabet.indexOf(firstPlugRow[clickedPlug])] === alphabet.indexOf(firstPlugRow[clickedPlug])) {

        if (selectedPlug > -1) {

          let oldPlug = selectedPlug;
          selectedPlug = plugs[clickedPlug];
          plugs[clickedPlug] = oldPlug;
        }
      }
    }
  }
}

// p5js window resized function
function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}

// function to track how much the user has scrolled since we last moved a rotor (only needed with trackpads)
let scrollCount = 0;

// p5js mouse wheel function
function mouseWheel(event) {

  scrollCount += event.delta; // event.delta is the amount scrolled

  if (scrollCount >= 100) {

    moveRotor(getSelectedRotor(), (scrollCount-scrollCount%100)/100);
    scrollCount -= 100;

  } else if (scrollCount <= -100) {

    moveRotor(getSelectedRotor(), (scrollCount-scrollCount%100)/100);
    scrollCount += 100;

  }

  return false; // this prevents the browser from doing anything with the mouse wheel event
}
