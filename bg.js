var parent;

function setup()
{
    parent = document.getElementById("main_container");
    var cnv = createCanvas(parent.clientWidth, parent.clientHeight);
    cnv.parent("main_container");
}

function draw()
{
    clear();


}

function windowResized()
{
    resizeCanvas(parent.clientWidth, parent.clientHeight);
}