const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
const navbar = document.getElementById("navbar");
const menuOpen = document.getElementById("menu-open");
const menuExit = document.getElementById("menu-exit");

function toggleMenu() {
  if (navMenu.classList.contains("hidden")) {
    navMenu.classList.remove("hidden");
    navMenu.classList.add("grid");
    navbar.classList.add("bg-black");
    navbar.classList.remove("bg-black-200");
    menuOpen.classList.add("hidden");
    menuExit.classList.remove("hidden");
  } else {
    navMenu.classList.add("hidden");
    navMenu.classList.remove("grid");
    navbar.classList.remove("bg-black");
    navbar.classList.add("bg-black-200");
    menuOpen.classList.remove("hidden");
    menuExit.classList.add("hidden");
  }
}
