let menuIcon = document.getElementById("menu-icon");
let closeMenuIcon = document.getElementById("close-menu");
let mobileMenu = document.getElementById("mobile-menu");


menuIcon.addEventListener("click", () => {
    mobileMenu.style.display = "grid";
    mobileMenu.classList.add("is-open");
    mobileMenu.classList.remove("is-closed");

});

closeMenuIcon.addEventListener("click", () => {
    // mobileMenu.style.display = "none";
    mobileMenu.classList.add("is-closed");
    mobileMenu.classList.remove("is-open");
    
});