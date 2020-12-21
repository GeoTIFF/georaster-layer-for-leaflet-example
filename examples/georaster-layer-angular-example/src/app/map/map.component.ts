import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import parseGeoRaster from 'georaster';
import GeoRasterLayer from 'georaster-layer-for-leaflet';
import proj4 from 'proj4';

(<any>window).proj4 = proj4;

@Component({
  selector: 'app-map',
  template: `<div id="map"></div>`,
  styles: [
  ]
})
export class MapComponent implements AfterViewInit {
  private map;

  ngAfterViewInit(): void {
    const createMap = async () => {
      this.map = L.map('map', {
        center: [ 39.8282, -98.5795 ],
        zoom: 3
      });
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.map);
  
      // this url is for the Near-Infrared Band
      const url = "https://landsat-pds.s3.amazonaws.com/c1/L8/045/032/LC08_L1TP_045032_20180811_20180815_01_T1/LC08_L1TP_045032_20180811_20180815_01_T1_B5.TIF";
      const georaster = await parseGeoRaster(url);
      console.log(georaster);
  
      const imageryLayer = new GeoRasterLayer({
        georaster,
        pixelValuesToColorFn: values => {
          // transforming single value into an rgba color
          const nir = values[0];

          if (nir === 0) return;
          // console.log("nir:", nir);
          const r = nir / 20000 * 255;
          const g = 0;
          const b = 0;
          return `rgba(${r},${g},${b}, 1)`;
        },
        resolution: 64,
        opacity: 1
      });
      
      imageryLayer.addTo(this.map);

      this.map.fitBounds(imageryLayer.getBounds());
    };
    createMap();
  }
}
