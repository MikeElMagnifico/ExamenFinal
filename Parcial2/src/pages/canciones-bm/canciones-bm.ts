import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CancionesBmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-canciones-bm',
  templateUrl: 'canciones-bm.html',
})
export class CancionesBmPage {

  Canciones = ["1.- Young Girls (3:49)",
    "2.- Locked Out of Heaven (3:54)",
    "3.- Gorilla (4:05)",
    "4.- Treasure (2:56)",
    "5.- Moonshine (3:49)",
    "6.- When I Was Your Man (3:34)",
    "7.- Natalie (3:45)",
    "8.- Show Me (3:48)",
    "9.- Money Make Her Smile (3:24)",
    "10.- If I Knew (2:13)"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionesBmPage');
  }


}
