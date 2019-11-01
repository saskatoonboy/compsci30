// Evolution Emulator
// Eric James
// Oct. Wed. 2nd 2019
//
// display is my state variable
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const meter = 250;
const limbSize = 25;
const MuscleWidth = 10;
let timeMultiplier = 1;
let groundY;
// if postitive the it is the id of the creature being displayed
// if -1 then main screen
// if -2 then WIP
let display = -1;
let creatures = [];
let creaturePos = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 1000; i++) {
    creatures[i] = new Creature();
  }
  groundY = height - 200;
}

function draw() {
  drawBackground();

  if (display > -1) {
    const creature = creatures[display];

    if (!creature.running) {
      creature.run();
    }

    for (let t = 0; t < timeMultiplier; t++) {
      if (!creature.update()) {
        display++;
        if (display > 999) {
          display = -2;
        }
      }
    }
    creature.draw();
    creature.displayStats();
  } else if (display === -1) {
    fill(0, 255, 0);
    rect(width/2-width/10, height/2 - height/20, width/5, height/10);

    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER)
    text("Start", width/2, height/2);

    textSize(12);
    text("Multi: " + timeMultiplier, width - 200, 200);
  } else if (display === -2) {

    print("Calculating...")

    for (let i = 0; i < creatures.length; i ++) {
      creaturePos[i] = creatures[i].x;
    }

    creaturePos.sort(function() {return-1});
    //if (creatures[1].x > creaturePos[0]) {
      //creaturePos[1] = creaturePos[0];
      //creaturePos[0] = creatures[1].x;
    //}

    //for (let creatureIndex = 2; creatureIndex < creatures.length; creatureIndex++) {
      //let i = 0;
      //while (i < creaturePos.length) {
        //if ([creaturePos[i] < creatures[creatureIndex].x]) {
          //i = creaturePos.length;
        //} else {
          //myArray.sort(function() {return-1});
          //i++;
        //}
      //}
    //}

    print(creaturePos);

    display = -1;
  }
}

function drawBackground() {
  if (display > -1) {
    background(100, 100, 255);
    noStroke();
    fill(8, 133, 14);
    rect(0, groundY, width, 200);
  } else {
    background(255, 166, 0);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  groundY = height - 200
}

function keyPressed() {
  if (key === "a") {
    display--;
  } else if (key === "d") {
    display++;
  } else if (key === "w") {
    timeMultiplier++;
  } else if (key === "s") {
    timeMultiplier--;
  } else if (key === "i") {
    timeMultiplier = 1024;
  }

  if (display < -1) {
    display = 999;
  } else if (display > 999) {
    display = -1;
  }

  if (timeMultiplier < 1) {
    timeMultiplier = 1;
  }
}

function mouseClicked() {
  if (mouseX > width/2-width/10 && mouseX < width/2+width/10 && mouseY > height/2-height/20 && mouseY > height/2-height/20) {
    display = 0;
  }
}

  // working creature sketch
  //nodes[0] = new Node(width/2+50, height/2+100, 1);
  //nodes[1] = new Node(width/2-50, height/2+100, 0);
  //nodes[2] = new Node(width/2, height/2, 0.2);
  //muscles[0] = new Muscle(nodes[0], nodes[1], 0.2, 1, 2.5, 300, 500);
  //muscles[1] = new Muscle(nodes[1], nodes[2], 0.2, 0.5, 5, 500, 300);
  //muscles[2] = new Muscle(nodes[0], nodes[2], 0.2, 0.5, 5, 100, 500);
