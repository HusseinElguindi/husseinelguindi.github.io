function setup()
{
    let e = document.getElementById("main_container");
    var cnv = createCanvas(e.clientWidth, e.clientHeight);
    cnv.parent("main_container");
}

function draw()
{
    clear();

    // for (let i = 0; i < 500; i++)
    // {
    //     fill(0);
    //     noStroke();
    //     ellipse(random(width), random(height), 3);
    // }
}

function windowResized()
{
    let e = document.getElementById("main_container");
    resizeCanvas(e.clientWidth, e.clientHeight);
}