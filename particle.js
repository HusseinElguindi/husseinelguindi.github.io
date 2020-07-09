class Particle
{
    constructor()
    {
        this.diameter = random(2, 3);
        this.max_vel = 1.5;
        this.vel = createVector(random(-this.max_vel, this.max_vel), random(-this.max_vel, this.max_vel));
        this.pos = createVector(random(width), random(height));
    }

    update()
    {
        this.pos.add(this.vel);
    }

    show()
    {
        noStroke();
        fill(0);
        ellipse(this.pos.x, this.pos.y, this.diameter);
    }
}