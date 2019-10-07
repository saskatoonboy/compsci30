class Creature {
    constructor(genes) {
        if (genes === undefined) {
            this.nodeCount = Math.floor(random(2, 6));
            this.timeAlive = -1;
            this.timeStarted;
            this.running = false;
            this.x;

            let muscleMax = ncr(this.nodeCount, 2);
            if (muscleMax > 9) {
                muscleMax = 9;
            }
            this.muscleCount = Math.floor(random(this.nodeCount - 1, muscleMax));

            this.nodes = [];
            this.muscles = [];

            const xs = [50, 50, -50, -50, 0];
            const ys = [50, -50, 50, -50, 0];

            for (let numNodes = 0; numNodes < this.nodeCount; numNodes++) {

                this.nodes[numNodes] = new Node(xs[numNodes] + width / 2, ys[numNodes] + height / 2, Math.floor(random(0, 1.1) * 10) / 10);
                if (numNodes > 0) {
                    const minLength = Math.floor(random(0.1, 1.1) * 10) / 10;
                    this.muscles[numNodes - 1] = new Muscle(this.nodes[numNodes - 1], this.nodes[numNodes], minLength, Math.floor(random(minLength + 0.5, minLength + 1.1) * 10) / 10, random([1, 2, 3, 4, 5]), Math.floor(random(100, 1000)), Math.floor(random(100, 1000)));
                }

            }

            for (let numMuscles = this.muscles.length; numMuscles < this.muscleCount; numMuscles++) {
                const firstNode = this.nodes[Math.floor(random(0, this.nodes.length))];
                const minLength = Math.floor(random(0.1, 1.1) * 10) / 10;

                let possibleNodes = [];
                for (let i = 0; i < this.nodes.length; i++) {
                    const node = this.nodes[i];
                    if (node !== firstNode) {
                        for (let j = 0; j < this.muscles.length; j++) {
                            const muscle = this.muscles[j];
                            if (!(muscle.node1 === firstNode && muscle.node2 === node) && !(muscle.node1 === node && muscle.node2 === firstNode)) {
                                possibleNodes.push(node);
                            }
                        }
                    }
                }
                possibleNodes.splice(possibleNodes.indexOf(firstNode));

                const secondNode = random(possibleNodes);

                this.muscles[numMuscles - 1] = new Muscle(firstNode, secondNode, minLength, Math.floor(random(minLength + 0.5, minLength + 1.1) * 10) / 10, random([1, 2, 3, 4, 5]), Math.floor(random(100, 1000)), Math.floor(random(100, 1000)));
            }
        } else {

        }
        let totalX = 0;
        for (let i = 0; i < this.nodes.length; i++) {
            totalX += this.nodes[i].pos.x;
        }
        this.x = (totalX / this.nodes.length) - width / 2;
    }

    displayStats() {
        fill(0);
        print("hi");
        textSize(32);
        textAlign(LEFT, CENTER);
        text("MM ID: " + creatures.indexOf(this), width-200, 50);
        text("Pos: " + Math.floor(this.x) / meter, width-200, 100);
        text("Secs: " + Math.floor(this.timeAlive/1000*timeMultiplier), width-200, 150);
        text("Multi: " + timeMultiplier, width-200, 200);

    }

    update() {
        if (this.running) {

            this.timeAlive = millis() - this.timeStarted;

            if (this.timeAlive >= 15000/timeMultiplier) {
                this.running  = false;
                return false;
            }

            for (let index = 0; index < this.muscles.length; index++) {
                this.muscles[index].update();
            }
    
            for (let index = 0; index < this.nodes.length; index++) {
                let node = this.nodes[index];
    
                node.applyForce(createVector(0, 0.05));
                node.update();
            }
    
            let totalX = 0;
            for (let i = 0; i < this.nodes.length; i++) {
                totalX += this.nodes[i].pos.x;
            }
            this.x = (totalX / this.nodes.length) - width / 2;
        }

        return true;
    }

    draw() {
        for (let index = 0; index < this.muscles.length; index++) {
            this.muscles[index].draw();
        }

        for (let index = 0; index < this.nodes.length; index++) {
            this.nodes[index].draw();
        }
    }

    run() {
        this.running = true;
        this.timeStarted = millis();
        this.timeAlive = millis()-this.timeStarted;
    }

    getGenes() {
        let genes = [this.nodeCount, this.muscleCount, this.nodes, this.muscles];
        return genes;
    }
}

function factorial(n) {
    if (n == 1) {
        return (1);
    }
    else {
        let num = n;
        n = n - 1;
        for (let i = n; i > 0; i--) {
            num *= i;
        }
        return (num);
    }

}

function ncr(n, r) {
    if (n === r || r === 0) {
        return 1;
    }
    let c = factorial(n);
    c = c / factorial(n - r);
    c = c / factorial(r);
    return c;
}