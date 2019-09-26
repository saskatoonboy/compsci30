
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


// Rotors


// function to draw the rotors
function drawRotors() {

  // array of romain numberals
  let romainNumberals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

  for (let rotorNumber = 0; rotorNumber < 3; rotorNumber++) {

    // custom rotor shape
    beginShape(LINES);

    // left edge
    vertex(width / 6 - 50 + rotorNumber * width / 3, 100);
    vertex(width / 6 - 45 + rotorNumber * width / 3, 150);

    vertex(width / 6 - 45 + rotorNumber * width / 3, 150);
    vertex(width / 6 - 45 + rotorNumber * width / 3, 200);

    vertex(width / 6 - 45 + rotorNumber * width / 3, 200);
    vertex(width / 6 - 50 + rotorNumber * width / 3, 250);

    // right edge
    vertex(width / 6 + rotorNumber * width / 3, 100);
    vertex(width / 6 + 5 + rotorNumber * width / 3, 150);

    vertex(width / 6 + 5 + rotorNumber * width / 3, 150);
    vertex(width / 6 + 5 + rotorNumber * width / 3, 200);

    vertex(width / 6 + 5 + rotorNumber * width / 3, 200);
    vertex(width / 6 + rotorNumber * width / 3, 250);

    // horizontal lines
    vertex(width / 6 - 50 + rotorNumber * width / 3, 100);
    vertex(width / 6 + rotorNumber * width / 3, 100);

    vertex(width / 6 - 45 + rotorNumber * width / 3, 150);
    vertex(width / 6 + 5 + rotorNumber * width / 3, 150);

    vertex(width / 6 - 45 + rotorNumber * width / 3, 200);
    vertex(width / 6 + 5 + rotorNumber * width / 3, 200);

    vertex(width / 6 - 50 + rotorNumber * width / 3, 250);
    vertex(width / 6 + rotorNumber * width / 3, 250);

    endShape();

  }

  // rotor letters
  for (let rotor = 0; rotor < 3; rotor++) {

    for (let offset = 1; offset >= -1; offset--) {

      // the index for rotorRotors is 2-rotor so that the first rotor is on the far right
      let totalOffset = rotorOffset[2 - rotor] + offset;

      if (totalOffset < 0) {

        totalOffset += 26;

      } else if (totalOffset > 25) {

        totalOffset -= 26;

      }

      // print the letter for the rotor. the index for currentRotors is 2-rotor so that the first rotor is on the far right
      text(alphabet[rotors[currentRotors[2 - rotor]][totalOffset]], width / 6 - 25 + width / 3 * rotor, 185 - offset * 50);
    }

    // write the romain numeral for the rotor
    text(romainNumberals[currentRotors[2 - rotor]], width / 6 - 25 + width / 3 * rotor, 85);

  }

  // draw unused rotors
  for (let rotorNumber = 0; rotorNumber < 8; rotorNumber++) {

    if (rotorNumber === selectedRotor) {

      fill(180);
      polygon(mouseX, mouseY, width / 20, 12);

      fill(220);
      polygon(mouseX, mouseY, width / 20 - 5, 12);

      fill(0);
      textSize(36);
      text(romainNumberals[rotorNumber], mouseX, mouseY + height / 50);

    } else if (currentRotors.indexOf(rotorNumber) === -1) {

      fill(180);
      polygon(width / 20 * 7 + (rotorNumber - rotorNumber % 2) / 2 * width / 10, height / 2 + rotorNumber % 2 * width / 10, width / 20, 12);

      fill(220);
      polygon(width / 20 * 7 + (rotorNumber - rotorNumber % 2) / 2 * width / 10, height / 2 + rotorNumber % 2 * width / 10, width / 20 - 5, 12);

      fill(0);
      textSize(36);
      text(romainNumberals[rotorNumber], width / 20 * 7 + (rotorNumber - rotorNumber % 2) / 2 * width / 10, height / 25 * 13 + rotorNumber % 2 * width / 10);
    }
  }

}

// function to move a specific rotor a designated amount
function moveRotor(rotor, amount) {

  rotorOffset[rotor - 1] += amount;

  if (rotorOffset[rotor - 1] < 0) {

    rotorOffset[rotor - 1] += 26;

  } else if (rotorOffset[rotor - 1] > 25) {

    rotorOffset[rotor - 1] -= 26;

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

  for (let rotorNumber = 0; rotorNumber < 3; rotorNumber++) {

    if (mouseX >= width / 6 - 50 + rotorNumber * width / 3 && mouseX <= width / 6 + 5 + rotorNumber * width / 3 && mouseY >= 100 && mouseY <= 250) {

      // return (rotorNumber - 3) * -1 so that the first rotor is on the far right
      return (rotorNumber - 3) * -1;

    }
  }

  return 0;

}

// check if one of the unused rotors was clicked on
function getClickedRotor(x, y) {

  if (y >= height / 2 - width / 20) {

    // first row of rotors
    if (y <= height / 2 + width / 20) {

      if (x >= width / 10 * 3) {

        // first rotor
        if (x <= width / 5 * 2) {

          if (selectedRotor === 0) {
            selectedRotor = -1;
          } else if (currentRotors.indexOf(0) === -1) {
            selectedRotor = 0;
          }


          // third rotor
        } else if (x <= width / 2) {

          if (selectedRotor === 2) {
            selectedRotor = -1;
          } else if (currentRotors.indexOf(2) === -1) {
            selectedRotor = 2;
          }


          // fifth rotor
        } else if (x <= width / 5 * 3) {

          if (selectedRotor === 4) {
            selectedRotor = -1;
          } else if (currentRotors.indexOf(4) === -1) {
            selectedRotor = 4;
          }


          // seventh rotor
        } else if (x <= width / 10 * 7) {

          if (selectedRotor === 6) {
            selectedRotor = -1;
          } else if (currentRotors.indexOf(6) === -1) {
            selectedRotor = 6;
          }


        }
      }

      // second row of rotors
    } else if (y <= height / 2 + width / 20 * 3) {

      if (x >= width / 10 * 3) {

        // second rotor
        if (x <= width / 5 * 2) {

          if (selectedRotor === 1) {
            selectedRotor = -1;
          } else if (currentRotors.indexOf(1) === -1) {
            selectedRotor = 1;
          }

          // fourth rotor
        } else if (x <= width / 2) {

          if (selectedRotor === 3) {
            selectedRotor = -1;
          } else if (currentRotors.indexOf(3) === -1) {
            selectedRotor = 3;
          }


          // sixth rotor
        } else if (x <= width / 5 * 3) {

          if (selectedRotor === 5) {
            selectedRotor = -1;
          } else if (currentRotors.indexOf(5) === -1) {
            selectedRotor = 5;
          }


          // eighth rotor
        } else if (x <= width / 10 * 7) {

          if (selectedRotor === 7) {
            selectedRotor = -1;
          } else if (currentRotors.indexOf(7) === -1) {
            selectedRotor = 7;
          }

        }
      }
    }
  }
}

// get the value that comes out of a rotor using the parameters of which rotor, the direction of the current, and the letter the current is flowing through
function getRotorEncryption(rotor, forward, char) {

  let rotorStrip = rotors[currentRotors[rotor - 1]];

  if (forward) {

    let rotorStripIndex = char + rotorOffset[rotor - 1];

    if (rotorStripIndex < 0) {

      rotorStripIndex += 26;

    } else if (rotorStripIndex > 25) {

      rotorStripIndex -= 26;

    }

    return (rotorStrip[rotorStripIndex]);

  } else {

    let rotorStripIndex = rotorStrip.indexOf(char);
    rotorStripIndex -= rotorOffset[rotor - 1];

    if (rotorStripIndex < 0) {

      rotorStripIndex += 26;
    } else if (rotorStripIndex > 25) {

      rotorStripIndex -= 26;
    }

    return rotorStripIndex;
  }

}