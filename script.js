// script.js
// Mobile menu toggle, smooth UX, simple lightbox

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
    });
  }

  // Lightbox handling
  const galleryImages = document.querySelectorAll(".gallery img");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox img");
  const lightboxClose = document.querySelector(".lightbox-close");

  if (galleryImages.length && lightbox && lightboxImg) {
    galleryImages.forEach(img => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.classList.add("open");
      });
    });
  }

  if (lightbox && lightboxClose) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target === lightboxClose) {
        lightbox.classList.remove("open");
      }
    });
  }
});