// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.addEventListener("click", (e) => {
  navbarNav.classList.toggle("active");
  e.stopPropagation(); // Menghentikan penyebaran klik
});

// Klik di luar elemen
document.addEventListener("click", (e) => {
  if (e.target !== hamburgerMenu && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//var loader = document.getElementById("loader");

//window.addEventListener("load", function () {
//  loader.style.display = "none";
//});
