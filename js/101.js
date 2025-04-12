console.log("hello world");

//let center = [48.698401, 2.176352];
let center = [48.698301, 2.177462];

// initialize the map on the "map" div with a given center and zoom
let map = L.map("map", {
  center: center,
  zoom: 16,
});
console.log("map created");

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

console.log("tileLayer created");

const marker = L.marker(center).addTo(map);
marker.bindPopup("Amphi Joliot-Curie").openPopup();
console.log("marker created");
marker.on("click", function () {
  console.log("marker clicked");
  marker.openPopup();
});
