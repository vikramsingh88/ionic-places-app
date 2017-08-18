import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { PlacesService } from "../../services/places.service";

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  location : {lat : number, lng : number} = {lat : 0.0, lng : 0.0};

  constructor(public navCtrl: NavController, public navParams: NavParams, private placesService  : PlacesService,
    private geolocation : Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }

  onPlaceCreate(value : {place:string}) {
    this.placesService.addPlace({title: value.place, location : this.location});
    this.navCtrl.pop();
  }

  onLocateMe() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.location = {lat : resp.coords.latitude, lng : resp.coords.longitude};
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
