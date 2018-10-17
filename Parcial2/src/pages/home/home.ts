import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagenBmPage } from '../imagen-bm/imagen-bm';
import { BmPage } from '../bm/bm';
import { ReseñasBmPage } from '../rese\u00F1as-bm/rese\u00F1as-bm';
import { CancionesBmPage } from '../canciones-bm/canciones-bm';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    imagen1 = ImagenBmPage;
    bio1 = BmPage;
    res1 = ReseñasBmPage;
    can1 = CancionesBmPage;
  constructor(public navCtrl: NavController) {

  }
  ImagenBM()
  {
    this.navCtrl.push(this.imagen1);
  }
  CanBM()
  {
    this.navCtrl.push(this.can1);
  }
  BM()
  {
    this.navCtrl.push(this.bio1);
  }
  ResBM()
  {
    this.navCtrl.push(this.res1);
  }
}
