import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CancionesAviciiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-canciones-avicii',
  templateUrl: 'canciones-avicii.html',
})
export class CancionesAviciiPage {
  Canciones = ["1.	Waiting For Love (3:50)",
    "2.	Talk to Myself (3:55)",
    "3.	Touch Me (3:06)",
    "4.	Ten More Days (4:05)",
    "5.	For a Better Day (3:26)",
    "6.	Broken Arrows (3:52)",
    "7.	True Believer (4:48)",
    "8.	City Lights (6:28)",
    "9.	Pure Grinding (2:51)",
    "10.	Sunset Jesus (4:24)",
    "11.	Can´t Catch Me (3:59)",
    "12.	Somewhere in Stockholm (3:22)",
    "13.	Trouble (2:51)",
    "14.	Gonna Love Ya (3:35)",
    "15.	The Nights (2:56)",
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionesAviciiPage');
  }

}
