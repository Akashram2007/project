var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var popupbutton = document.querySelector(".login")
var cancel = document.querySelector(".cancel")
var cancel = document.querySelector(".join")

function popup()
{
    popupoverlay.style.display="block"
    popupbox.style.display="block"
}

function remove()
{
    popupoverlay.style.display="none"
    popupbox.style.display="none"
}