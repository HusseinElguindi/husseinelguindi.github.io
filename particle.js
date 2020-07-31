class Particle
{
    constructor(x = null, y = null)
    {
        this.diameter = random(2, 3);
        this.max_vel = 1.5;
        this.vel = createVector(random(-this.max_vel, this.max_vel), random(-this.max_vel, this.max_vel));

        // this.pos = createVector(random(width), random(height));
        this.pos = createVector();
        if (x === null) {
            this.pos.x = random(width);
        }
        else {
            this.pos.x = x;
        }
        if (y === null) {
            this.pos.y = random(height);
        }
        else {
            this.pos.y = y;
        }
    }

    update()
    {
        this.pos.add(this.vel);
    }

    show()
    {
        // noStroke();
        // fill(0);
        ellipse(this.pos.x, this.pos.y, this.diameter);
    }
}
