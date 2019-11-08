// First Project
// Eric James
// Sept. Thrus. 5th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let walkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight)
  walkers.push(new Walker(width/2, height/2));
}

function draw() {
  for (walker of walkers) {
    walker.display();
    walker.move();
  }
}

function mouseClicked() {
  walkers.push(new Walker(mouseX, mouseY));
}

class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vol = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.fillColor = color(random(255), random(255), random(255));
    this.speed = 0.1;
    this.diamiter = 5;
  }

  display() {
    fill(this.fillColor);
    noStroke();
    circle(this.pos.x, this.pos.y, this.diamiter);
  }

  move() {
    this.vol.add(this.acc);
    this.pos.add(this.vol);
    this.acc.mult(0);
  
    let chance = random(100);

    if (chance <= 25) {
      this.acc.add(createVector(this.speed, 0));
    } else if (chance <= 50) {
      this.acc.add(createVector(-this.speed, 0));
    } else if (chance <= 75) {
      this.acc.add(createVector(0, this.speed));
    } else {
      this.acc.add(createVector(0, -this.speed));
    }
  }
}
