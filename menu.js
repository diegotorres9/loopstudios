let menuIcon = document.getElementById("menu-icon");
let closeMenuIcon = document.getElementById("close-menu");
let mobileMenu = document.getElementById("mobile-menu");


menuIcon.addEventListener("click", () => {
    mobileMenu.classList.add("is-open");
});

closeMenuIcon.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
});