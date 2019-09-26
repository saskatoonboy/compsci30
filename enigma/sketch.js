// Enigma
// Eric James
// Sept. Thurs. 12th 2019
//
// I used a function from the p5js website that i copied and pasted to draw a polygon
//
// Extra for Experts:
// - The rotors that are being used are drawn using a custom shape (the unused one use copy and pasted code not mine)
// - The window resizes properly
// - The mouse wheel is used to turn the rotors

let displayWindow = "lightBoard"; // controls when different things are displayed (lightBoard, plugBoard and rotors)
let lampOffColour = [220, 220, 220]; // the colour of a lamp that is off
let lampOnColour = [240, 250, 0]; // the colour of a lamp that is on
let onLamp = ""; // the lamp that is on

// the alphabet
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";

// function to setup p5js
function setup() {

  createCanvas(windowWidth, windowHeight);

}

// polygon function from p5js examples NOT MADE BY ME
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

    // if the light board is being displayed then draw the lamps 
    drawLamps();

  } else if (displayWindow == "rotors") {

    // if the rotors are being displayed then draw the rotors
    drawRotors();

  } else {

    // if the plug board is being displayed then draw the plugs
    drawPlugs();

  }
}

// p5js key pressed function
function keyPressed() {

  if (displayWindow === "lightBoard") {

    // move the rotors
    moveRotors();

    // enrypt the key pressed using encryptKey function
    onLamp = alphabet[encryptKey(alphabet.indexOf(key.toUpperCase()))];

  }
}

// p5js key released function
function keyReleased() {

  onLamp = "";

}

// p5js mouse clicked function
function mouseClicked() {

  // get the button that was clicked
  let buttonClicked = getButtonClicked(mouseX, mouseY);

  // changing the display window
  buttonWasClicked(buttonClicked);

  // swaping the used rotors
  if (displayWindow === "rotors") {

    let clickedRotor = getSelectedRotor(mouseX, mouseY);

    switchRotors(clickedRotor);

    // handling plug movement
  } else if (displayWindow === "plugBoard") {
    let clickedPlug = getClickedPlug(mouseX, mouseY);

    // handle the click
    clickedOnPlug(clickedPlug);
  }
}

// p5js window resized function
function windowResized() {

  // reset the width and height values to the windowWidth and windowHeight
  resizeCanvas(windowWidth, windowHeight);

}

// function to track how much the user has scrolled since we last moved a rotor (only needed with trackpads)
let scrollCount = 0;

// p5js mouse wheel function
function mouseWheel(event) {

  scrollCount += event.delta; // event.delta is the amount scrolled

  if (scrollCount >= 100) {

    moveRotor(getSelectedRotor(), (scrollCount - scrollCount % 100) / 100);
    scrollCount -= 100;

  } else if (scrollCount <= -100) {

    moveRotor(getSelectedRotor(), (scrollCount - scrollCount % 100) / 100);
    scrollCount += 100;

  }

  return false; // this prevents the browser from doing anything with the mouse wheel event
}
