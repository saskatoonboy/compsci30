class Creature {
    constructor(genes) {
        if (genes === undefined) {
            this.limbCount = Math.floor(random(2, 6));
            this.timeAlive = -1;
            this.timeStarted;
            this.running = false;
            this.x;

            let muscleMax = ncr(this.limbCount, 2);
            if (muscleMax > 9) {
                muscleMax = 9;
            }
            this.muscleCount = Math.floor(random(this.limbCount - 1, muscleMax));

            this.limbs = [];
            this.muscles = [];

            const xs = [50, 50, -50, -50, 0];
            const ys = [50, -50, 50, -50, 0];

            for (let numLimbs = 0; numLimbs < this.limbCount; numLimbs++) {

                this.limbs[numLimbs] = new Limb(xs[numLimbs] + width / 2, ys[numLimbs] + height / 2, Math.floor(random(0, 1.1) * 10) / 10);
                if (numLimbs > 0) {
                    const minLength = Math.floor(random(0.1, 1.1) * 10) / 10;
                    this.muscles[numLimbs - 1] = new Muscle(this.limbs[numLimbs - 1], this.limbs[numLimbs], minLength, Math.floor(random(minLength + 0.5, minLength + 1.1) * 10) / 10, random([1, 2, 3, 4, 5]), Math.floor(random(100, 1000)), Math.floor(random(100, 1000)));
                }

            }

            for (let numMuscles = this.muscles.length; numMuscles < this.muscleCount; numMuscles++) {
                const firstLimb = this.limbs[Math.floor(random(0, this.limbs.length))];
                const minLength = Math.floor(random(0.1, 1.1) * 10) / 10;

                let possibleLimbs = [];
                for (let i = 0; i < this.limbs.length; i++) {
                    const limb = this.limbs[i];
                    if (limb !== firstLimb) {
                        for (let j = 0; j < this.muscles.length; j++) {
                            const muscle = this.muscles[j];
                            if (!(muscle.limb1 === firstLimb && muscle.limb2 === limb) && !(muscle.limb1 === limb && muscle.limb2 === firstLimb)) {
                                possibleLimbs.push(limb);
                            }
                        }
                    }
                }
                possibleLimbs.splice(possibleLimbs.indexOf(firstLimb));

                const secondLimb = random(possibleLimbs);

                this.muscles[numMuscles - 1] = new Muscle(firstLimb, secondLimb, minLength, Math.floor(random(minLength + 0.5, minLength + 1.1) * 10) / 10, random([1, 2, 3, 4, 5]), Math.floor(random(100, 1000)), Math.floor(random(100, 1000)));
            }
        } else {

        }
        let totalX = 0;
        for (let i = 0; i < this.limbs.length; i++) {
            totalX += this.limbs[i].pos.x;
        }
        this.x = (totalX / this.limbs.length) - width / 2;
    }

    displayStats() {
        fill(0);
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
    
            for (let index = 0; index < this.limbs.length; index++) {
                let limb = this.limbs[index];
    
                limb.applyForce(createVector(0, 0.05));
                limb.update();
            }
    
            let totalX = 0;
            for (let i = 0; i < this.limbs.length; i++) {
                totalX += this.limbs[i].pos.x;
            }
            this.x = (totalX / this.limbs.length) - width / 2;
        }

        return true;
    }

    draw() {
        for (let index = 0; index < this.muscles.length; index++) {
            this.muscles[index].draw();
        }

        for (let index = 0; index < this.limbs.length; index++) {
            this.limbs[index].draw();
        }
    }

    run() {
        this.running = true;
        this.timeStarted = millis();
        this.timeAlive = millis()-this.timeStarted;
    }

    getGenes() {
        let genes = [this.limbCount, this.muscleCount, this.limbs, this.muscles];
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