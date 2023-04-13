mapboxgl.accessToken = 'pk.eyJ1IjoiYWFiYTAwIiwiYSI6ImNsZzVxaWltcTA1dnczaHFyc3NrZXc4N20ifQ.HHHdXxGVb4zlQcNg1CwEZg';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/dark-v11', // style URL
    center: [-98.4842, 39.0119], // starting position [lng, lat]
    zoom: 1 // starting zoom
    });   

// data set of mcr songs that have only been played live once
const songData = [
    {
      "song": "All the Angels",
      "song-type": "Original",
      "venue": "Kia Forum",
      "city": "Inglewood, CA, USA",
      "address": "3900 W Manchester Blvd, Inglewood, CA 90305",
      "year": 2022,
      "lat": 33.958221,
      "long": -118.341843
    },
    {
      "song": "American Idiot",
      "song-type": "Cover",
      "venue": "U.S. Cellular Center",
      "city": "Cedar Rapids, IA, USA",
      "address": "370 1st Avenue NE, Cedar Rapids, IA 52401",
      "year": 2005,
      "lat": 41.98013,
      "long": -91.66739
    },
    {
      "song": "Don't Look Back in Anger",
      "song-type": "Cover",
      "venue": "abart",
      "city": "Zurich, Switzerland",
      "address": "Manessestrasse 170, Zürich, Switzerland",
      "year": 2005,
      "lat": 47.36171,
      "long": 8.52233
    },
    {
      "song": "Fake Your Death",
      "song-type": "Original",
      "venue": "Kia Forum",
      "city": "Inglewood, CA, USA",
      "address": "3900 W Manchester Blvd, Inglewood, CA 90305",
      "year": 2022,
      "lat": 33.958221,
      "long": -118.341843
    },
    {
      "song": "Mother",
      "song-type": "Cover",
      "venue": "KB Hallen",
      "city": "Copenhagen, Denmark",
      "address": "Peter Bangs Vej 147, 2000 Frederiksberg, Denmark",
      "year": 2007,
      "lat": 55.67763,
      "long": 12.49485
    },
    {
      "song": "My Way",
      "song-type": "Cover",
      "venue": "Prudential Center",
      "city": "Newark, NJ, USA",
      "address": "25 Lafayette St, Newark, NJ 07102",
      "year": 2022,
      "lat": 40.73415891,
      "long": -74.17089401
    },
    {
      "song": "The House of the Rising Sun",
      "song-type": "Cover",
      "venue": "SUMMER SONIC 2004 Tokyo",
      "city": "Tokyo, Japan",
      "address": "1 Mihama, Mihama Ward, Chiba, 261-0022, Japan",
      "year": 2004,
      "lat": 35.6459372,
      "long": 140.0307237
    },
    {
      "song": "The Number of the Beast",
      "song-type": "Cover",
      "venue": "Leeds Metropolitan University",
      "city": "Leeds, UK",
      "address": "Leeds LS1 3HE, UK",
      "year": 2005,
      "lat": 53.80299288,
      "long": -1.547907208
    },
    {
      "song": "We Will Rock You",
      "song-type": "Cover",
      "venue": "Reading Festival 2011",
      "city": "Reading, UK",
      "address": "Richfield Ave, Reading RG4 7TH, United Kingdom",
      "year": 2011,
      "lat": 51.46706007,
      "long": -0.983838912
    }
  ]

  //custom mcr markers - https://docs.mapbox.com/mapbox-gl-js/example/custom-marker-icons/
  

  // markers 
  songData.forEach(function(songRecord){
    const popup = new mapboxgl.Popup().setText(
        `Song: ${songRecord['song']}`
    );
    new mapboxgl.Marker()
    .setLngLat([songRecord.long, songRecord.lat])
    .setPopup(popup)
    .addTo(map)

  })

  //about:config