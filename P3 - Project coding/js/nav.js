// Skaffer elementene fra DOM
const burgerEl = document.getElementById("burger");
const navEl = document.querySelector("#navbar");

// Viser side - nav når burger blir trykket
function showNav() {
    navEl.classList.toggle('nav-active');

}
// Lytter etter trykk på burger
burgerEl.addEventListener("click", showNav);