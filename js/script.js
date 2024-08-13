// Swiper initialization
const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2.5,
  spaceBetween: 10,
});

// Smooth scroll function
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({ behavior: "smooth" });
}

// Event listeners for navbar links
document.querySelectorAll(".navbar-nav .nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    smoothScroll(targetId);
  });
});
