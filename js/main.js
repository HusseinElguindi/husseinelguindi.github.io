// var nav;
// window.addEventListener("load", () =>
// {
//     nav = document.getElementById("navbar");
// });

// window.addEventListener('resize', () =>
// {
//     if (window.innerHeight > window.innerWidth)
//     {
//         nav.classList.add("nav_center");
//     }
//     else
//     {
//         nav.classList.remove("nav_center");
//     }
// });

var nav_overlay;
var nav_btn;
var is_nav_shown;
window.addEventListener("load", () =>
{
    nav_btn = document.getElementById("nav-btn");
    nav_overlay = document.getElementById("nav-overlay");
    is_nav_shown = false;

    tilt_tiles = document.querySelectorAll(".tile.tilt");
    for (tile of tilt_tiles)
    {
        tile.addEventListener("mouseenter", (event) => tile_mouseenter(event))
        tile.addEventListener("mouseleave", (event) => tile_mouseleave(event));
        tile.addEventListener("mousemove", (event) => tile_mousemove(event));
    }
});

function nav_click(change_nav_color=false)
{
    if (!is_nav_shown)
    {
        if (change_nav_color)
        {
            nav_btn.style.color = "white";
        }
        nav_overlay.style.display = "flex";
        // nav_overlay.style.opacity = "1";
    }
    else
    {
        if (change_nav_color)
        {
            nav_btn.style.color = "black";
        }
        nav_overlay.style.display = "none";
        // nav_overlay.style.opacity = "0";
    }

    is_nav_shown = !is_nav_shown;
}

function tile_mouseenter(e)
{
    e.target.style.transition = "transform 1000ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s;"
}
function tile_mousemove(e)
{
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    e.target.style.transform = `perspective(1000px) scale3d(1.05, 1.05, 1.05) rotateY(${map(x, 0, rect.right-rect.left, 15, -15)}deg) rotateX(${map(y, 0, rect.bottom-rect.top, -15, 15)}deg)`;

}
function tile_mouseleave(e)
{

    e.target.style.transform = "perspective(0px) scale3d(1, 1, 1)"
    e.target.style.transition = "all 1000ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s;"
}

function map(val, val_range_min, val_range_max, new_range_min, new_range_max)
{
    return (val - val_range_min) / (val_range_max - val_range_min) * (new_range_max - new_range_min) + new_range_min
}