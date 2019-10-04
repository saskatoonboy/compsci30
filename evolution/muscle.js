class Muscle {
    constructor(n1, n2, min, max, str, outTime, inTime) {
      this.node1 = n1;
      this.node2 = n2;
      this.min = min;
      this.max = max;
      this.strength = str*10;
      this.outTime = outTime;
      this.inTime = inTime;
      this.extending = true;
      this.time = millis();
  
      this.vector = createVector(this.node1.pos.x, this.node1.pos.y);
      this.vector = this.vector.sub(this.node2.pos);
  
      this.pushVector = createVector(this.vector.x, this.vector.y);
      this.pushVector.div(1000/this.strength);
  
      this.normalVector = createVector(this.node1.pos.x, this.node1.pos.y);
      this.normalVector.normalize();
    }
  
    update() {
      this.vector.set(this.node1.pos.x, this.node1.pos.y);
      this.vector = this.vector.sub(this.node2.pos);
  
      if (this.extending) {
        print(this.vector.mag() < this.max * meter);
        if (this.vector.mag() < this.max * meter) {
          this.node1.pos.add(p5.Vector.mult(this.pushVector, this.node1.currentFriction));
          this.node2.pos.sub(p5.Vector.mult(this.pushVector, this.node2.currentFriction));
        } else {
          this.node1.pos.sub(this.pushVector);
          this.node2.pos.add(this.pushVector);
        }
  
        if (millis() - this.time >= this.outTime) {
          this.extending = false;
          this.time = millis();
        }
      } else {
        if (this.vector.mag() > this.min * meter) {
          this.node1.pos.sub(p5.Vector.mult(this.pushVector, this.node1.currentFriction));
          this.node2.pos.add(p5.Vector.mult(this.pushVector, this.node2.currentFriction));
        } else {
          this.node1.pos.add(this.pushVector);
          this.node2.pos.sub(this.pushVector);
        }
  
        if (millis() - this.time >= this.inTime) {
          this.extending = true;
          this.time = millis();
        }
      }
    }
  
    draw() {
      strokeWeight(MuscleWidth);
      stroke(150, 150, 150, this.strength * 5.1);
      line(this.node1.pos.x, this.node1.pos.y, this.node2.pos.x, this.node2.pos.y);
    }
  }
  