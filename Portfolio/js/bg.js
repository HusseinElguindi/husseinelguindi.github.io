p5.disableFriendlyErrors = true; // disables FES

var parent;
var particles = [];

var pWidth;
var pHeight;

var mouse_link_dist;
var particle_link_dist;

function setup()
{
    console.log(mouse_link_dist);
    parent = document.getElementById("main_container");
    var cnv = createCanvas(parent.clientWidth, parent.clientHeight);
    cnv.parent("main_container");

    mouse_link_dist = sq(200);
    particle_link_dist = sq(110);

    // let required_particles = Math.round(width * height * 0.00009) - 10;
    // if (required_particles > 90) {
    //     required_particles = 90;
    // }
    // else if (required_particles < 25) {
    //     required_particles = 25;
    // }

    let required_particles = Math.round(width * height * 0.0005) - 10;

    // required_particles = 300;

    for (let i = 0; i < required_particles; i++) {
        particles.push(new Particle());
    }
}

var p;
var p2;

function draw()
{
    clear();

    fill(0);
    noStroke();
    for (let i = 0; i < particles.length; i++) {
        p = particles[i];

        if (p.pos.x > width || p.pos.x < 0) {
            p.vel.x *= -1;
        }

        if (p.pos.y > height || p.pos.y < 0) {
            p.vel.y *= -1;
        }

        p.update();
        p.show();
    }

    // stroke(0, 0, 0, 20);
    // strokeWeight(1);
    // for (let i = 0; i < particles.length; i++) {
    //     p = particles[i];

    //     for (let x = 0; x < particles.length; x++) {
    //         if (x == i) {
    //             continue;
    //         }

    //         p2 = particles[x];

    //         if (distsq2D(p.pos.x, p.pos.y, p2.pos.x, p2.pos.y) < particle_link_dist) {
    //             line(p.pos.x, p.pos.y, p2.pos.x, p2.pos.y);
    //         }
    //     }

    //     if (distsq2D(p.pos.x, p.pos.y, mouseX, mouseY) < mouse_link_dist) {
    //         line(p.pos.x, p.pos.y, mouseX, mouseY);
    //     }
    // }

    noStroke();
    textAlign(LEFT, TOP);
    text(frameRate().toFixed(2), 10, 10);
}

function distsq2D(x1, y1, x2, y2) {
    return sq(x1 - x2) + sq(y1 - y2);
}

function windowResized()
{
    pWidth = width;
    pHeight = height;

    resizeCanvas(parent.clientWidth, parent.clientHeight);

    let required_particles = Math.round(width * height * 0.00009) - 10;
    if (required_particles > 90) {
        required_particles = 90;
    }
    else if (required_particles < 25) {
        required_particles = 25;
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