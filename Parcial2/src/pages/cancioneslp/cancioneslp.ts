import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CancioneslpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cancioneslp',
  templateUrl: 'cancioneslp.html',
})
export class CancioneslpPage {
  Canciones = ["1.	Foreward (0:15)",
    "2.	Don´t Stay (3:08)",
    "3.	Somewhere I Belong (3:34)",
    "4.	Lying from You (2:55)",
    "5.	Hit the Floor (2:44)",
    "6.	Easier to Run (3:24)",
    "7.	Faint (2:42)",
    "8.	Figure.09 (3:18)",
    "9.	Breaking the Habit (3:16)",
    "10.	From the Inside (2:54)",
    "11.	Nobody´s Listening (2:59)",
    "12.	Session (2:24)",
    "13.	Numb (3:08)",
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancioneslpPage');
  }

}
