class Creature {
    constructor(genes) {
      if (genes === undefined) {
        this.nodeCount = random(2, 5);
        this.muscleCount = random(this.nodeCount-1, 5);
  
        this.nodes = [];
        this.muscles = [];
  
        const xs = [50, 50, -50, -50, 0];
        const ys = [50, -50, 50, -50, 0];
  
        for (let numNodes = 0; numNodes < this.nodeCount; numNodes ++) {
          
          this.nodes[numNodes] = new Node(xs[numNodes]+width/2, ys[numNodes]+height/2, Math.floor(random(0, 1.1)*10)/10);
            print(numNodes);
          if (numNodes > 0) {
            const minLength = Math.floor(random(0.1, 1.1)*10)/10;
            this.muscles[numNodes-1] = new Muscle(this.nodes[numNodes-1], this.nodes[numNodes], minLength, Math.floor(random(minLength+0.5, minLength+1.1)*10)/10, random([1, 2, 3, 4, 5]), Math.floor(random(100, 1000)), Math.floor(random(100, 1000)));
          }
  
        }
  
        for (let numMuscles = this.muscles.length; numMuscles < this.muscleCount; numMuscles ++) {
          const firstNode = this.nodes[Math.floor(random(0,nodes.length))];
          let secondNode = firstNode;
          while (secondNode === firstNode) {
            secondNode = this.nodes[Math.floor(random(0,nodes.length))];
          }
          this.muscles[numNodes-1] = new Muscle(firstNode, secondNode, minLength, Math.floor(random(minLength+0.5, minLength+1.1)*10)/10, random([1, 2, 3, 4, 5]), Math.floor(random(100, 1000)), Math.floor(random(100, 1000)));
        }
      }
    }
  }