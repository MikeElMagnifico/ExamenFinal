import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CancionesM5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-canciones-m5',
  templateUrl: 'canciones-m5.html',
})
export class CancionesM5Page {
  Canciones = ["1.- One More Night (3:39)",
    "2.- Payphone (3:52)",
    "3.- Daylight (3:46)",
    "4.- Lucky Strike (3:05)",
    "5.- The Man Who Never Lied (3:25)",
    "6.- Love Somebody (3:49)",
    "7.- Ladykiller (2:44)",
    "8.- Fortune Teller (3:24)",
    "9.- Sad (3:14)",
    "10.- Tickets (3:29)",
    "11.- Doin’ Dirt (3:31)",
    "12.- Beautiful Goodbye (4:15)",
    "13.- Wipe Your Eyes (3:36)",
    "14.- Wasted Years (3:33)",
    "15.- Let´s Stay Together (3:23)",
    "16.- One More Night (Sticky K Remix) (3:56)"
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionesM5Page');
  }

}
