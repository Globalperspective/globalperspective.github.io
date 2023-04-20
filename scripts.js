// Initialize the map
const map = L.map('map').setView([51.505, -0.09], 13);

// Add the OSM tile layer
const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add the satellite tile layer
const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.esri.com/en-us/home">Esri</a>'
});

// Toggle basemap button
document.getElementById('toggle-basemap').addEventListener('click', () => {
  if (map.hasLayer(osmLayer)) {
    map.removeLayer(osmLayer);
    map.addLayer(satelliteLayer);
  } else {
    map.removeLayer(satelliteLayer);
    map.addLayer(osmLayer);
  }
});

// List of countries with their coordinates and storymap URLs
const countries = [
  { name: "Algerien", url: "https://storymaps.arcgis.com/stories/fb6c5497010b43ecaa3f96c9b04a0c80/edit", lat: 28.0339, lng: 1.6596 },
  { name: "Albanien", url: "https://storymaps.arcgis.com/stories/01c71505978d4bf789be32a71ad4f4ec", lat: 41.1533, lng: 20.1683 },
  { name: "Ägypten", url: "https://storymaps.arcgis.com/stories/d183bffab960495b920723fbc0b94c1c", lat: 26.8206, lng: 30.8025 },
  { name: "Abchasien", url: "https://storymaps.arcgis.com/stories/76f29b27fc20498abc820807c36505d7", lat: 43.0802, lng: 41.0973 },
  { name: "Afghanistan", url: "https://storymaps.arcgis.com/stories/7637f8f154e54fc397723e2250e595e2", lat: 33.9391, lng: 67.7100 },
];

// Create markers for each country
countries.forEach((country) => {
  const marker = L.marker([country.lat, country.lng]).addTo(map);
  marker.bindPopup(`<a href="${country.url}" target="_blank">${country.name}</a>`);
});

// Add click event to map
map.on('click', (e) => {
  // Code to display popup with country information
});