// Evolution Emulator
// Eric James
// Oct. Wed. 2nd 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const meter = 250;
const limbSize = 25;
const MuscleWidth = 10;
let timeMultiplier = 1;
let groundY;
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
    text("Multi: " + timeMultiplier, width - 200, 200);
  } else if (display === -2) {

    print("Calculating...")

    creaturePos[0] = creatures[0].x;

    if (creatures[1].x > creaturePos[0]) {
      creaturePos[1] = creaturePos[0];
      creaturePos[0] = creatures[1].x;
    }

    for (let creatureIndex = 2; creatureIndex < creatures.length; creatureIndex++) {
      let shiftIndex = -1;
      let creaturePosIndex = 0
      while (shiftIndex === -1) {
        if (creatures[creatureIndex].x > creaturePos[creaturePosIndex]) {
          shiftIndex = creaturePosIndex;
        }
        if (creaturePosIndex === creaturePos.length - 1) {
          shiftIndex = creaturePos.length;
        }
        creaturePosIndex++;
      }
      creaturePos[creatureIndex] = creatures[creatureIndex].x;
    }

    for (let i = 0; i < creaturePos.length; i++) {
      print(creaturePos[i]);
    }
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
    timeMultiplier = 256;
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

  // working creature sketch
  //nodes[0] = new Node(width/2+50, height/2+100, 1);
  //nodes[1] = new Node(width/2-50, height/2+100, 0);
  //nodes[2] = new Node(width/2, height/2, 0.2);
  //muscles[0] = new Muscle(nodes[0], nodes[1], 0.2, 1, 2.5, 300, 500);
  //muscles[1] = new Muscle(nodes[1], nodes[2], 0.2, 0.5, 5, 500, 300);
  //muscles[2] = new Muscle(nodes[0], nodes[2], 0.2, 0.5, 5, 100, 500);
