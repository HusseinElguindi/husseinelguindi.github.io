var parent;
var particles = [];

var pWidth;
var pHeight;

function setup()
{
    parent = document.getElementById("main_container");
    var cnv = createCanvas(parent.clientWidth, parent.clientHeight);
    cnv.parent("main_container");

    let required_particles = Math.round(width * height * 0.00009);
    if (required_particles > 100) {
        required_particles = 100;
    }
    else if (required_particles < 35) {
        required_particles = 35;
    }

    for (let i = 0; i < required_particles; i++) {
        particles.push(new Particle());
    }
}

function draw()
{
    clear();

    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        if (p.pos.x - 10 > width || p.pos.x + 10 < 0) {
            p.vel.x *= -1;
        }

        if (p.pos.y - 10 > height || p.pos.y + 10 < 0) {
            p.vel.y *= -1;
        }

        p.update();
        p.show();
    }

    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        for (let x = 0; x < particles.length; x++) {
            let p2 = particles[x];

            if (dist(p.pos.x, p.pos.y, p2.pos.x, p2.pos.y) < 110) {
                stroke(0, 0, 0, 15);
                strokeWeight(1);
                line(p.pos.x, p.pos.y, p2.pos.x, p2.pos.y);
            }
        }
    }

    textAlign(LEFT, TOP);
    text(frameRate().toFixed(2), 10, 10);
}

function windowResized()
{
    pWidth = width;
    pHeight = height;

    resizeCanvas(parent.clientWidth, parent.clientHeight);

    let required_particles = Math.round(width * height * 0.00009);
    if (required_particles > 100) {
        required_particles = 100;
    }
    else if (required_particles < 35) {
        required_particles = 35;
    }

    if (required_particles < particles.length) {
        particles = particles.splice(0, required_particles);
        // TODO: DO SOMETHING ABOUT PARTICLES BEING OUT OF BOUNDS FOR TOO LONG
    }
    else {
        let iters = required_particles - particles.length;
        for (let i = 0; i < iters; i++) {
            particles.push(new Particle());
            // TODO: USE PWIDTH AND PHEIGHT TO CALCULATE THE ARE THAT WAS ENLARGENED AND ADD RANDOM PARTICLES THERE
        }
    }

    // console.log(required_particles);
    // console.log(particles.length);
    // console.log("\n");
}
