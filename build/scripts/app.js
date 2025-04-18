document.addEventListener("DOMContentLoaded", function () {
  DarkMode();
  BarrasActive();
  initMap();
  FechaActual();
});

function DarkMode() {
  const BtnDarkMode = document.querySelector(".dark-mode");
  const Body = document.querySelector("body");

  // Verifica si el usuario prefiere modo oscuro
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersDark) {
    Body.classList.add("Dark__Mode--Active");
  }

  BtnDarkMode.addEventListener("click", () => {
    Body.classList.toggle("Dark__Mode--Active");
  });
}

function BarrasActive() {
  const Barra = document.querySelector(".mobileversion");
  const Enlaces = document.querySelector(".Header__Nav");

  Barra.addEventListener("click", () => {
    Enlaces.classList.toggle("Active");
  });
}

function initMap() {
  const lat = 19.9787,
    lng = -99.1639; // Coordenadas de Apaxco

  // Crear el contenedor del mapa
  const mapContainer = document.getElementById("map");
  if (!mapContainer) {
    console.error("No se encontró el elemento #map");
    return;
  }

  // Inicializar el mapa
  const map = L.map("map").setView([lat, lng], 13);

  // Capa base de OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Agregar marcador
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup("Apaxco, Estado de México")
    .openPopup();
}

function FechaActual() {
  const fecha = new Date();
  const opciones = { day: "2-digit", month: "2-digit", year: "numeric" };
  const espacios = document.querySelectorAll("#fecha-actual");
  espacios.forEach((espacio) => {
    espacio.textContent = fecha.toLocaleDateString("es-MX", opciones);
  });
}
