class Muscle {
    constructor(l1, l2, min, max, str, outTime, inTime) {
      this.limb1 = l1;
      this.limb2 = l2;
      this.min = min;
      this.max = max;
      this.strength = str*10;
      this.outTime = outTime;
      this.inTime = inTime;
      this.extending = true;
      this.time = millis();
  
      this.vector = createVector(this.limb1.pos.x, this.limb1.pos.y);
      this.vector = this.vector.sub(this.limb2.pos);
  
      this.pushVector = createVector(this.vector.x, this.vector.y);
      this.pushVector.div(1000/this.strength);
  
      this.normalVector = createVector(this.limb1.pos.x, this.limb1.pos.y);
      this.normalVector.normalize();
    }
  
    update() {
      this.vector.set(this.limb1.pos.x, this.limb1.pos.y);
      this.vector = this.vector.sub(this.limb2.pos);
  
      if (this.extending) {
        if (this.vector.mag() < this.max * meter) {
          this.limb1.pos.add(p5.Vector.mult(this.pushVector, this.limb1.currentFriction));
          this.limb2.pos.sub(p5.Vector.mult(this.pushVector, this.limb2.currentFriction));
        } 
        if (this.vector.mag() > this.max * meter) {
          this.limb1.pos.sub(p5.Vector.mult(this.pushVector, this.limb1.currentFriction));
          this.limb2.pos.add(p5.Vector.mult(this.pushVector, this.limb2.currentFriction));
        }
  
        if (millis() - this.time >= this.outTime/timeMultiplier) {
          this.extending = false;
          this.time = millis();
        }
      } else {
        if (this.vector.mag() > this.min * meter) {
          this.limb1.pos.sub(p5.Vector.mult(this.pushVector, this.limb1.currentFriction));
          this.limb2.pos.add(p5.Vector.mult(this.pushVector, this.limb2.currentFriction));
        } 
        if (this.vector.mag() < this.min * meter) {
          this.limb1.pos.add(p5.Vector.mult(this.pushVector, this.limb1.currentFriction));
          this.limb2.pos.sub(p5.Vector.mult(this.pushVector, this.limb2.currentFriction));
        }
  
        if (millis() - this.time >= this.inTime/timeMultiplier) {
          this.extending = true;
          this.time = millis();
        }
      }
    }
  
    draw() {
      strokeWeight(MuscleWidth);
      stroke(150, 150, 150, this.strength * 5.1);
      line(this.limb1.pos.x, this.limb1.pos.y, this.limb2.pos.x, this.limb2.pos.y);
    }
  }
  