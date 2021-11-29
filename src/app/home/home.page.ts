import { Component } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public latitudPromesa: number;
  public longitudPromesa: number;
  public latitudObservable: number;
  public longitudObservable: number;

  constructor(private geolocation: Geolocation) {

    this.latitudPromesa = 0;
    this.longitudPromesa = 0;

    this.latitudObservable = 0;
    this.longitudObservable = 0;

  }

  getLocProm(): void{

    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitudPromesa = resp.coords.latitude;
      this.longitudPromesa = resp.coords.longitude;
    }).catch((error)=>
      console.error('Error al obtener la geolocalización' + error)
    );
  }

  getLocObs(): void{
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data: Geoposition) => {
      this.latitudObservable = data.coords.latitude;
      this.longitudObservable = data.coords.longitude;
    });
  }
}
