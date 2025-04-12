console.log("hello world");

// initialize the map on the "map" div with a given center and zoom
var map = L.map("map", {
  center: [48.9068, 2.2464],
  zoom: 15,
});
console.log("map created");

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

console.log("tileLayer created");
