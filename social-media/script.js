const hamburger = document.getElementById("mobile-link-btn");
const mobileMenu = document.getElementById("mobile-links");
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  console.log("hello");
});
