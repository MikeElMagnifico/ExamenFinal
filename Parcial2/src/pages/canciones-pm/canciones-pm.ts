import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CancionesPmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-canciones-pm',
  templateUrl: 'canciones-pm.html',
})
export class CancionesPmPage {
  Canciones = ["1.	Paranoid (3:42)",
    "2.	Spoil My Night (feat. Swae Lee) (3:15)",
    "3.	Rich & Sad (3:26)",
    "4.	Zack And Codeine (3:24)",
    "5.	Takin´ Shots (3:37)",
    "6.	rockstar (feat. 21 Savage) (3:38)",
    "7.	Over Now (4:07)",
    "8.	Psycho (feat. Ty Dolla $ign) (3:41)",
    "9.	Better Now (3:51)",
    "10.	Ball For Me (feat. Nicki Minaj) (3:48)",
    "11.	Otherside (3:48)",
    "12.	Stay (3:24)",
    "13.	Blame It On Me (4:22)",
    "14.	Same Bitches (feat. G-Eazy & YG) (3:32)",
    "15.	Jonestown (Interlude) (1:52)",
    "16.	92 Explorer (3:31)",
    "17.	Candy Paint (3:48)",
    "18.	Sugar Wraith (3:48)",
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionesPmPage');
  }

}
