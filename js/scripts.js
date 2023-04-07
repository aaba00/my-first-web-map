mapboxgl.accessToken = 'pk.eyJ1IjoiYWFiYTAwIiwiYSI6ImNsZzVxaWltcTA1dnczaHFyc3NrZXc4N20ifQ.HHHdXxGVb4zlQcNg1CwEZg';

const NYC_COORDINATES = [-74.00214, 40.71882]
const BRONX_ZOO = [-73.8770, 40.8506]

const map = new mapboxgl.Map({
container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v12', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoomp
});

// map center point marker
