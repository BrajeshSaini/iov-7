import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss'],
})
export class GeolocationComponent  implements OnInit {

  coordinates = Geolocation.getCurrentPosition();
  geoLoactionInfo : any;

  constructor() { 
    this.coordinates.then((res)=>{
      
      this.geoLoactionInfo = res;
      
    })
  console.log('Current position:', this.coordinates);
  }

  ngOnInit() {}

}
