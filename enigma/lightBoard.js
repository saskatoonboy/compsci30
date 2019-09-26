


// Light Board


// function to draw the lamps
function drawLamps() {

  let firstRow = "QWERTYUIOP"; // order of letters in the first row of lamps
  let secondRow = "ASDFGHJKL"; // order of letters in the second row of lamps
  let thirdRow = "ZXCVBNM"; // order of letters in the third row of lamps

  // draw first row
  for (let index = 0; index < firstRow.length; index++) {

    // draw lamp
    if (onLamp == firstRow[index]) {

      fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);

    } else {

      fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);

    }

    circle(width / 20 + index * width / 10, 180, 50);
    fill(0);
    textSize(32);
    text(firstRow[index], width / 20 + index * width / 10, 193);

  }

  // draw second row
  for (let index = 0; index < secondRow.length; index++) {

    // draw lamp
    if (onLamp == secondRow[index]) {

      fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);

    } else {

      fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);

    }

    circle(width / 10 + index * width / 10, 340, 50);
    fill(0);
    textSize(32);
    text(secondRow[index], width / 10 + index * width / 10, 353);

  }

  // draw third row
  for (let index = 0; index < thirdRow.length; index++) {

    // draw lamp
    if (onLamp == thirdRow[index]) {

      fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);

    } else {

      fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);

    }

    circle(width / 5 + index * width / 10, 500, 50);
    fill(0);
    textSize(32);
    text(thirdRow[index], width / 5 + index * width / 10, 513);

  }
}