const burgerEl = document.getElementById("burger");
const navEl = document.querySelector("#navbar");

function showNav() {
    navEl.classList.toggle('nav-active');

}

burgerEl.addEventListener("click", showNav);