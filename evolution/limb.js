class Limb {
    constructor(x, y, f) {
      this.friction = f;
      this.currentFriction = 0;
  
      this.red = this.friction * 255;
      this.green = 0;
      this.blue = 0;
  
      this.pos = createVector(x, y);
      this.vol = createVector(0, 0);
      this.acc = createVector(0, 0);
    }
  
    update() {
      this.vol.add(this.acc);
  
  
      if (this.pos.y + this.vol.y > groundY - 12.5) {
        this.pos.y = groundY-12.5;
        this.vol.y = 0;
        this.currentFriction = this.friction;
      } else {
        this.currentFriction = 1;
      }
  
      this.pos.add(this.vol);
      this.acc.mult(0);
  
    }
  
    applyForce(force) {
      this.acc.add(force);
    }
  
    draw() {
      stroke(0);
      strokeWeight(1);
      fill(this.red, this.green, this.blue);
      circle(this.pos.x, this.pos.y, nodeSize);
    }
  }
