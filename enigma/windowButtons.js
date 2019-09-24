


// window buttons


// function to draw the buttons used to switch windows
function drawWindowButtons() {

  textAlign(CENTER);
  textSize(24);
  fill(220);

  if (displayWindow === "lightBoard") {

    rect(width / 2 - 100, height - 40, 100, 40);
    rect(width / 2, height - 40, 100, 40);

    fill(0);

    text("Plugs", width / 2 - 50, height - 10);
    text("Rotors", width / 2 + 50, height - 10);

  } else if (displayWindow === "plugBoard") {

    rect(width / 2 - 100, height - 40, 100, 40);
    rect(width / 2, height - 40, 100, 40);

    fill(0);

    text("Rotors", width / 2 - 50, height - 10);
    text("Lights", width / 2 + 50, height - 10);

  } else if (displayWindow === "rotors") {

    rect(width / 2 - 100, height - 40, 100, 40);
    rect(width / 2, height - 40, 100, 40);

    fill(0);

    text("Lights", width / 2 - 50, height - 10);
    text("Plugs", width / 2 + 50, height - 10);
  }
}

// function to get which of the window navigation buttons was clicked
function getButtonClicked(x, y) {

  if (y > height - 40) {

    if (x > width / 2 - 100) {

      if (x > width / 2) {

        if (x < width / 2 + 100) {

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