document.addEventListener("DOMContentLoaded", () => {
  const tools = [
    { img: "img/three.js_imagen.png", link: "https://jasandoval454.github.io/Serpientes-y-Escaleras-parcial/" },
    { img: "img/camara.jpg", link: "https://ejemplo.com/2" },
    { img: "img/HTML5_logo_and_wordmark.svg.png", link: "https://ejemplo.com/3" },
    { img: "img/Unity-logo.png", link: "https://ejemplo.com/4" },
    { img: "img/ilustraitor_imagen.png", link: "https://ejemplo.com/5" },
    { img: "img/DaVinci_Resolve_17_logo.svg.png", link: "https://ejemplo.com/6" },
    { img: "img/After_effects_imagen.png", link: "https://ejemplo.com/7" },
  ];

  const grid = document.getElementById("image-grid");

  tools.forEach(({ img, link }) => {
    const col = document.createElement("div");
    col.className = "col-6 col-md-4 col-lg-3 mb-4 text-center";

    const image = document.createElement("img");
    image.src = img;
    image.alt = "Herramienta";
    image.className = "tool-icon";
    image.onclick = () => window.open(link, "_blank");

    col.appendChild(image);
    grid.appendChild(col);
  });
});



