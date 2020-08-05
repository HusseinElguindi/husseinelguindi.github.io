var Hussein3D;

function init()
{
    Hussein3D = document.getElementById("Hussein3D");
    console.log(Hussein3D);
    console.log("Worked");
}

// window.onmousemove = function(e)
// {
//     Hussein3D.style.transform = `translate(${map(e.pageX, 0, window.innerWidth, -5, 5)}vw, ${map(e.pageY, 0, window.innerHeight, -5, 5)}vh)`;
// };

function map(value, from1, to1, from2, to2) {
    return (value - from1) / (to1 - from1) * (to2 - from2) + from2;
}

window.onload = init;