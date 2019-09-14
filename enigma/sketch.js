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
  textAlign(CENTER);
  if (displayWindow === "lightBoard") {
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
  drawLamps();
}

function drawLamps() {
  // draw Q lamp
  if (onLamp == "q") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(100, 100, 50);
  fill(0);
  textSize(32);
  text("Q", 100, 113);
  
  // draw W lamp
  if (onLamp == "w") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(153, 100, 50);
  fill(0);
  textSize(32);
  text("W", 100, 113);
  
  // draw E lamp
  if (onLamp == "e") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(206, 100, 50);
  fill(0);
  textSize(32);
  text("E", 100, 113);
  
  // draw R lamp
  if (onLamp == "r") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(259, 100, 50);
  fill(0);
  textSize(32);
  text("R", 100, 113);
  
  // draw T lamp
  if (onLamp == "t") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(312, 100, 50);
  fill(0);
  textSize(32);
  text("T", 100, 113);
  
  // draw Y lamp
  if (onLamp == "y") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(365, 100, 50);
  fill(0);
  textSize(32);
  text("Y", 100, 113);
  
  // draw U lamp
  if (onLamp == "u") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(418, 100, 50);
  fill(0);
  textSize(32);
  text("U", 100, 113);
  
  // draw I lamp
  if (onLamp == "i") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(471, 100, 50);
  fill(0);
  textSize(32);
  text("I", 100, 113);
  
  // draw O lamp
  if (onLamp == "o") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(524, 100, 50);
  fill(0);
  textSize(32);
  text("O", 100, 113);
  
  // draw P lamp
  if (onLamp == "p") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(577, 100, 50);
  fill(0);
  textSize(32);
  text("P", 100, 113);
  
  // draw A lamp
  if (onLamp == "a") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(100, 100, 50);
  fill(0);
  textSize(32);
  text("A", 100, 113);
  
  // draw S lamp
  if (onLamp == "s") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(100, 100, 50);
  fill(0);
  textSize(32);
  text("S", 100, 113);
  
  // draw D lamp
  if (onLamp == "d") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(100, 100, 50);
  fill(0);
  textSize(32);
  text("D", 100, 113);
  
  // draw F lamp
  if (onLamp == "f") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(100, 100, 50);
  fill(0);
  textSize(32);
  text("F", 100, 113);
  
  // draw G lamp
  if (onLamp == "g") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(100, 100, 50);
  fill(0);
  textSize(32);
  text("G", 100, 113);
  
  // draw H lamp
  if (onLamp == "h") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(100, 100, 50);
  fill(0);
  textSize(32);
  text("H", 100, 113);
  
  // draw J lamp
  if (onLamp == "j") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(100, 100, 50);
  fill(0);
  textSize(32);
  text("J", 100, 113);
  
  // draw K lamp
  if (onLamp == "k") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(100, 100, 50);
  fill(0);
  textSize(32);
  text("K", 100, 113);
  
  // draw L lamp
  if (onLamp == "l") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(100, 100, 50);
  fill(0);
  textSize(32);
  text("L", 100, 113);
  
  // draw Z lamp
  if (onLamp == "z") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(100, 100, 50);
  fill(0);
  textSize(32);
  text("Z", 100, 113);
  
  // draw X lamp
  if (onLamp == "x") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(100, 100, 50);
  fill(0);
  textSize(32);
  text("X", 100, 113);
  
  // draw C lamp
  if (onLamp == "c") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(100, 100, 50);
  fill(0);
  textSize(32);
  text("C", 100, 113);
  
  // draw V lamp
  if (onLamp == "v") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(100, 100, 50);
  fill(0);
  textSize(32);
  text("V", 100, 113);
  
  // draw B lamp
  if (onLamp == "b") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(100, 100, 50);
  fill(0);
  textSize(32);
  text("B", 100, 113);
  
  // draw N lamp
  if (onLamp == "n") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(100, 100, 50);
  fill(0);
  textSize(32);
  text("N", 100, 113);
  
  // draw M lamp
  if (onLamp == "m") {
    fill(lampOnColour[0], lampOnColour[1], lampOnColour[2]);
  } else {
    fill(lampOffColour[0], lampOffColour[1], lampOffColour[2]);
  }
  circle(100, 100, 50);
  fill(0);
  textSize(32);
  text("M", 100, 113);
  
}

function keyPressed() {
  onLamp = key;
}

function keyReleased() {
  onLamp = "";
}
