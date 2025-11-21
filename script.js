<<<<<<< HEAD
// Load listings
if (document.getElementById("listings")) {
  const container = document.getElementById("listings");
  properties.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.cover}">
        <h2>${p.name}</h2>
        <p>${p.location}</p>
        <p>${p.price}</p>
        <a href="property.html?id=${p.id}">View Property</a>
      </div>`;
  });
}
// Property details
if (document.getElementById("property")) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const p = properties.find(x => x.id === id);
  const box = document.getElementById("property");
  if (p) {
    box.innerHTML = `
      <h1>${p.name}</h1>
      <h3>${p.price}</h3>
      <p><b>Location:</b> ${p.location}</p>
      <p>${p.description}</p>
      <h3>Gallery</h3>
      ${p.gallery.map(g=>`<img src="${g}" style="width:200px;margin:5px">`).join("")}
      <br><br>
      <a href="https://wa.me/254712345678?text=Interested in ${p.name}">
        Contact via WhatsApp
      </a>
    `;
  }
}
=======
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
>>>>>>> 957690d709784d699d4c545d35fb76b4c25e130c
