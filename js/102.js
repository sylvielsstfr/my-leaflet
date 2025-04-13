console.log("hello world");

//let center = [48.698401, 2.176352];
let center = [48.698301, 2.177462];
let gramophone = [48.69794, 2.18437];
let cesfo = [48.69848, 2.16852];

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

// Marker for the amphiteater
const marker = L.marker(center).addTo(map);
marker.bindPopup("IJCLab:Amphi Joliot-Curie").openPopup();
console.log("marker created");
marker.on("click", function () {
  console.log("marker clicked");
  marker.openPopup();
});

// Marker for the restaurants
const cesfoMarker = L.marker(cesfo).addTo(map);
cesfoMarker.bindPopup("CESFO restaurant");
console.log("cesfoMarker created");

const gramophoneMarker = L.marker(gramophone).addTo(map);
gramophoneMarker.bindPopup("Gramophone restaurant");
console.log("gramophoneMarker created");

// Show the coordinates of the cursor
let coordsDiv = document.getElementById("coords");

map.on("mousemove", function (e) {
  var lat = e.latlng.lat.toFixed(5);
  var lng = e.latlng.lng.toFixed(5);
  coordsDiv.innerHTML = `Lat: ${lat}, Lng: ${lng}`;
});
