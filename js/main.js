var nav;
window.addEventListener("load", () =>
{
    nav = document.getElementById("navbar");
});

window.addEventListener('resize', () =>
{
    if (window.innerHeight > window.innerWidth)
    {
        nav.classList.add("nav_center");
    }
    else
    {
        nav.classList.remove("nav_center");
    }
});