//this function hide the navbar for mobiles and show a display button
document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
