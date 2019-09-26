


// plugboard


let plugs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]; // where each plug connects
let firstPlugRow = "QWERTYUIOP"; // order of letters in the first row of plugs
let secondPlugRow = "ASDFGHJKL"; // order of letters in the second row of plugs
let thirdPlugRow = "ZXCVBNM"; // order of letters in the third row of plugs
let selectedPlug = -1;

function getClickedPlug(x, y) {

  // first row
  if (y >= 130 && y <= 230) {

    for (let index = 0; index < firstPlugRow.length; index++) {

      if (x >= width / 20 + index * width / 10 - 25 && x <= width / 20 + index * width / 10 + 25) {

        return alphabet.indexOf(firstPlugRow[index]);

      }
    }
  }

  // second row
  if (y >= 290 && y <= 390) {

    for (let index = 0; index < secondPlugRow.length; index++) {

      if (x >= width / 10 + index * width / 10 - 25 && x <= width / 10 + index * width / 10 + 25) {

        return alphabet.indexOf(secondPlugRow[index]);

      }
    }
  }

  // third row
  if (y >= 450 && y <= 550) {

    for (let index = 0; index < thirdPlugRow.length; index++) {

      if (x >= width / 5 + index * width / 10 - 25 && x <= width / 5 + index * width / 10 + 25) {

        return alphabet.indexOf(thirdPlugRow[index]);

      }
    }
  }

  return -1;
}

function drawPlugs() {

  print(alphabet[selectedPlug], selectedPlug);

  // draw first row
  for (let index = 0; index < firstPlugRow.length; index++) {

    // draw plug

    if (plugs[alphabet.indexOf(firstPlugRow[index])] === alphabet.indexOf(firstPlugRow[index])) {

      fill(220);

    } else {

      fill(0);

    }

    rect(width / 20 + index * width / 10 - 25, 130, 50, 100);

    circle(width / 20 + index * width / 10, 160, 20);
    circle(width / 20 + index * width / 10, 200, 20);

    fill(0);
    textSize(32);
    text(firstPlugRow[index], width / 15 + index * width / 10 - 25, 120);

    if (plugs[alphabet.indexOf(firstPlugRow[index])] !== alphabet.indexOf(firstPlugRow[index])) {

      fill(255);
      text(alphabet[plugs[alphabet.indexOf(firstPlugRow[index])]], width / 15 + index * width / 10 - 25, 190);

    }
  }

  // draw second row
  for (let index = 0; index < secondPlugRow.length; index++) {

    // draw plug


    if (plugs[alphabet.indexOf(secondPlugRow[index])] === alphabet.indexOf(secondPlugRow[index])) {

      fill(220);

    } else {

      fill(0);

    }

    rect(width / 10 + index * width / 10 - 25, 290, 50, 100);

    circle(width / 10 + index * width / 10, 320, 20);
    circle(width / 10 + index * width / 10, 360, 20);

    fill(0);
    textSize(32);
    text(secondPlugRow[index], width / 60 * 7 + index * width / 10 - 25, 280);

    if (plugs[alphabet.indexOf(secondPlugRow[index])] !== alphabet.indexOf(secondPlugRow[index])) {

      fill(255);
      text(alphabet[plugs[alphabet.indexOf(secondPlugRow[index])]], width / 60 * 7 + index * width / 10 - 25, 350);

    }
  }

  // draw third row
  for (let index = 0; index < thirdPlugRow.length; index++) {

    // draw plug


    if (plugs[alphabet.indexOf(thirdPlugRow[index])] === alphabet.indexOf(thirdPlugRow[index])) {

      fill(220);

    } else {

      fill(0);

    }

    rect(width / 5 + index * width / 10 - 25, 450, 50, 100);

    circle(width / 5 + index * width / 10, 480, 20);
    circle(width / 5 + index * width / 10, 520, 20);

    fill(0);
    textSize(32);
    text(thirdPlugRow[index], width / 60 * 13 + index * width / 10 - 25, 440);

    if (plugs[alphabet.indexOf(thirdPlugRow[index])] !== alphabet.indexOf(thirdPlugRow[index])) {

      fill(255);
      text(alphabet[plugs[alphabet.indexOf(thirdPlugRow[index])]], width / 60 * 13 + index * width / 10 - 25, 510);

    }
  }

  if (selectedPlug > -1) {

    fill(0);
    rect(mouseX - 25, mouseY - 50, 50, 100);

  }

  // drawing the cables
  beginShape(LINES);
  for (let socket = 0; socket < 26; socket++) {

    let socketLetter = alphabet[socket];
    let plugLetter = alphabet[plugs[socket]];

    if (plugs[socket] === -1) {

      if (firstPlugRow.indexOf(socketLetter) > -1) {
        vertex(width / 20 + firstPlugRow.indexOf(socketLetter) * width / 10, 230);
      } else if (secondPlugRow.indexOf(socketLetter) > -1) {
        vertex(width / 10 + secondPlugRow.indexOf(socketLetter) * width / 10, 390);
      } else if (thirdPlugRow.indexOf(socketLetter) > -1) {
        vertex(width / 5 + thirdPlugRow.indexOf(socketLetter) * width / 10, 550);
      }

      vertex(mouseX, mouseY + 50);

    } else if (plugs[socket] !== socket && plugs[socket] < socket) {

      if (firstPlugRow.indexOf(socketLetter) > -1) {
        vertex(width / 20 + firstPlugRow.indexOf(socketLetter) * width / 10, 230);
      } else if (secondPlugRow.indexOf(socketLetter) > -1) {
        vertex(width / 10 + secondPlugRow.indexOf(socketLetter) * width / 10, 390);
      } else if (thirdPlugRow.indexOf(socketLetter) > -1) {
        vertex(width / 5 + thirdPlugRow.indexOf(socketLetter) * width / 10, 550);
      }

      if (firstPlugRow.indexOf(plugLetter) > -1) {
        vertex(width / 20 + firstPlugRow.indexOf(plugLetter) * width / 10, 230);
      } else if (secondPlugRow.indexOf(plugLetter) > -1) {
        vertex(width / 10 + secondPlugRow.indexOf(plugLetter) * width / 10, 390);
      } else if (thirdPlugRow.indexOf(plugLetter) > -1) {
        vertex(width / 5 + thirdPlugRow.indexOf(plugLetter) * width / 10, 550);
      }
    }
  }
  endShape();
}