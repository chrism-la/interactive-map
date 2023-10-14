// when page load request user location
// Version 1
// window.onload = () => {
//     getUserCoordinates();
// };
// Version 2 add async await
window.onload = async () => {
    // store array of coordinates into a variable to use
    const coordinates = await getUserCoordinates();
    // initialize map with coordinates
    myMap.createMap(coordinates);
};

// create Map Object
const myMap = {
    // create properties
    createMap: function (coordinates) {
        // Create Map
        const map = L.map('map', {
            center: coordinates,
            zoom: 8,
        });

        // Create Tile Layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Create Marker
        const marker = L.marker(coordinates);
        marker.addTo(map).bindPopup('<p1><b>You Are Here</b></p1>').openPopup();
    },
};

// function to retrieve user location
async function getUserCoordinates() {
    let position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return [position.coords.latitude, position.coords.longitude];
}



fsq38ehzQYXJWUofH6JJmG/eQLbeV8erEZ3VsRnLgi3afI8=


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'fsq38ehzQYXJWUofH6JJmG/eQLbeV8erEZ3VsRnLgi3afI8='
    }
  };
  
  fetch('https://api.foursquare.com/v3/places/search', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));