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

    stroke(0, 0, 0, 20);
    strokeWeight(1);
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        for (let x = 0; x < particles.length; x++) {
            let p2 = particles[x];

            if (dist(p.pos.x, p.pos.y, p2.pos.x, p2.pos.y) <= 110) {
                line(p.pos.x, p.pos.y, p2.pos.x, p2.pos.y);
            }
        }

        if (dist(p.pos.x, p.pos.y, mouseX, mouseY) <= 200) {
            line(p.pos.x, p.pos.y, mouseX, mouseY);
        }
    }

    noStroke();
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
    }
    else {
        let iters = required_particles - particles.length;
        for (let i = 0; i < iters;) {
            if (random() > 0.5) {
                if (width > pWidth) {
                    particles.push(new Particle(random(pWidth, width), random(height)));
                    i++;
                }
                if (height > pHeight) {
                    particles.push(new Particle(random(width), random(pHeight, height)));
                    i++;
                }
            }
            else {
                particles.push(new Particle());
                i++;
            }
        }
    }

    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        if (p.pos.x > width + 11) {
            if (random() > 0.4) {
                p.pos.x = width + 5;
            }
            else {
                p.pos.x = -5;
            }
        }
        if (p.pos.y > height + 11) {
            if (random() > 0.4) {
                p.pos.y = height + 5;
            }
            else {
                p.pos.y = -5;
            }
        }
    }
}