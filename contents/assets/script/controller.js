const oncontextmenudefaultstatus = false;
window.onload = function () {
    document.getElementById("profile").oncontextmenu() == oncontextmenudefaultstatus ? 
    document.getElementById("profile").oncontextmenu = function () { return !oncontextmenudefaultstatus } :
    document.getElementById("profile").oncontextmenu = function () { return !oncontextmenudefaultstatus }
}