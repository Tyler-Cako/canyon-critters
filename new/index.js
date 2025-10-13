const menuIcon = document.querySelector(".menu-icon");
const navItems = document.querySelector(".nav-items");
const navListItems = document.getElementsByClassName("nav-list-item")
const closeNavMenuIcon = document.querySelector(".close-menu-icon");

const toggleMenu = () => {
    navItems.toggleAttribute("hidden");
}

menuIcon.addEventListener("click", toggleMenu);
closeNavMenuIcon.addEventListener("click", toggleMenu);