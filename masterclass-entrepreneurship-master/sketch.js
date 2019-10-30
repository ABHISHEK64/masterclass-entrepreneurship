let snow = [];
let gravity;

function setup() {
    createCanvas(windowWidth, windowHeight);
    gravity = createVector(0, 0.03);
}

function draw() {
    background(51);
    snow.push(new Snowflake());
    for (flake of snow) {
        flake.applyForce(gravity);
        flake.update();
        flake.render();
    }
}


class Snowflake {
    constructor() {
        let x = random(width);
        let y = random(-100, -10);
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector();
        this.r = random(4, 8);
    }
    applyForce(force) {
        this.acc.add(force);
    }
    update() {
        //this.force = gravity.copy();
        //this.acc = gravity;
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    render() {
        stroke(255);
        strokeWeight(this.r);
        point(this.pos.x, this.pos.y);
    }


}