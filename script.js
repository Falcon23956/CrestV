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
