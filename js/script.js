document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".navigation a").forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("menu").classList.remove("active");
      document.querySelector(".menu-toggle").classList.remove("active");
    });
  });
});

function toggleMenu() {
  const menu = document.getElementById("menu");
  const toggle = document.querySelector(".menu-toggle");

  menu.classList.toggle("active");
  toggle.classList.toggle("active");
}
