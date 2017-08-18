import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {

  lat : number;
  lng : number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl : ViewController) {
    this.lat = navParams.data.location.lat;
    this.lng = navParams.data.location.lng;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  onDismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewWillEnter() {

  }

}
