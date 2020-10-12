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