// create Map
const myMap = L.map('map', {
    center: [34.0206085, -118.741372],
    zoom: 8,
});

// Create Tile Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

// Create Marker
const marker = L.marker([34.0206085, -118.741372]);
marker.addTo(myMap).bindPopup('<p1><b>You Are Here</b></p1>').openPopup();

// function to retrieve user location
async function getUserCoordinates() {
    let position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return [position.coords.latitude, position.coords.longitude];
}

// when page load request user location
// then initialize map
// listen for events on the menu
// then apply the foursquare

// map object
// get coords via geolocation
// get foursquare busin
// process foursquare array
// event handlers
// window load
// business submit
