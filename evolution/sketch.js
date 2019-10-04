// Evolution Emulator
// Eric James
// Oct. Wed. 2nd 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const meter = 250;
const nodeSize = 25;
const MuscleWidth = 10;
let groundY;
let display = 0;
let nodes = [];
let muscles = [];
let creatures = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //nodes[0] = new Node(width/2+50, height/2+100, 1);
  //nodes[1] = new Node(width/2-50, height/2+100, 0);
  //nodes[2] = new Node(width/2, height/2, 0.2);
  //muscles[0] = new Muscle(nodes[0], nodes[1], 0.2, 1, 2.5, 300, 500);
  //muscles[1] = new Muscle(nodes[1], nodes[2], 0.2, 0.5, 5, 500, 300);
  //muscles[2] = new Muscle(nodes[0], nodes[2], 0.2, 0.5, 5, 100, 500);
  //creatures[0] = new Creature();
  groundY = height-200;
}

function draw() {
  drawBackground();

  if (display > -1) {

    print(creatures[display]);

    //for (let index = 0; index < muscles.length; index++) {
      //muscles[index].update();
    //}

    //for (let index = 0; index < nodes.length; index++) {
      //let node = nodes[index];

      //node.applyForce(createVector(0, 0.05));
      //node.update();
    //}

    //for (let index = 0; index < muscles.length; index++) {
      //muscles[index].draw();
    //}

    //for (let index = 0; index < nodes.length; index++) {
      //let node = nodes[index];

      //node.draw();
    //}
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
  groundY = height-200
}
