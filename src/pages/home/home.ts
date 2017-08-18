import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewPlacePage } from "../new-place/new-place";
import { PlacesService } from "../../services/places.service";
import { PlacePage } from "../place/place";
import { Place } from "../../model/place.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places : Place[] = [];
  constructor(public navCtrl: NavController, private placesService : PlacesService, private modelCtrl : ModalController) {
  }

  ionViewWillEnter() {
    this.placesService.getPlaces()
    .then( (places) => {
      this.places = places;
    } );
  }

  onLoadNewPlace() {
    this.navCtrl.push(NewPlacePage);    
  }

  onOpenPlace(place : Place) {
    this.modelCtrl.create(PlacePage, place).present();
  }

}
