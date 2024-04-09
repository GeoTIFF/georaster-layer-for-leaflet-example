/* Show elevation of the municipality of Lisbon */

<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
      integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
      crossorigin=""/>
    <style>
      #map {
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }
    </style>
  </head>
  <body>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"   
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
         integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
         crossorigin=""></script>
    <script src="https://cdn.jsdelivr.net/npm/georaster@1.6.0/dist/georaster.browser.bundle.min.js"></script>
    <script src="https://unpkg.com/georaster-layer-for-leaflet/dist/georaster-layer-for-leaflet.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/rainbowvis.js@1.1.1/rainbowvis.js"></script>
    
    <div id="map"></div>
    <script>
      var map = L.map('map')
      
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map)
      
      var url_to_geotiff_file = "https://contabo.joaopimentel.com/img/tif/1106.tif"
      
      fetch(url_to_geotiff_file)
        .then(res => res.arrayBuffer())
        .then(arrayBuffer => {
          parseGeoraster(arrayBuffer).then(georaster => {    
            const numberOfItems = Math.round(georaster.maxs[0])
            const rainbow = new Rainbow()
            rainbow.setNumberRange(1, numberOfItems)
            rainbow.setSpectrum('white', 'red')
      
            const layer = new GeoRasterLayer({
              georaster: georaster,
              opacity: 0.8,
              pixelValuesToColorFn: vals => vals[0] <= 0 ? null : '#' + rainbow.colourAt(Math.round(vals[0])),
              resolution: 512 // optional parameter for adjusting display resolution
            }).addTo(map)
      
            map.fitBounds(layer.getBounds())
          })
        })
    </script>
  </body>
</html>
