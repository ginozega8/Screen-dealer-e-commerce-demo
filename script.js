//Hide navbar on scroll
let navBar = document.querySelector("#navbar");
let lastScrollY = window.scrollY;
let hamMenu = document.getElementById("ham-menu")
let body = document.body

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    navBar.classList.add("hidden-navbar")
    lastScrollY = window.scrollY;
  } else {
    navBar.classList.remove("hidden-navbar")
    lastScrollY = window.scrollY;
  }
})

function showHam() {
    if (hamMenu.classList.contains("show-ham")){
        hamMenu.classList.add("hide-ham")
        hamMenu.classList.remove("show-ham")
        body.classList.remove("stop-scrolling")
    } else {
        hamMenu.classList.add("show-ham")
        hamMenu.classList.remove("hide-ham")
        body.classList.add("stop-scrolling") //Disable scrolling when ham-menu is displayed
    }

}
