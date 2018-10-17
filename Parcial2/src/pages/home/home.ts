import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagenBmPage } from '../imagen-bm/imagen-bm';
import { BmPage } from '../bm/bm';
import { ReseñasBmPage } from '../rese\u00F1as-bm/rese\u00F1as-bm';
import { CancionesBmPage } from '../canciones-bm/canciones-bm';
import { ImagenM5Page } from '../imagen-m5/imagen-m5';
import { ReseñasM5Page } from '../reseñas-m5/reseñas-m5';
import { M5Page } from '../m5/m5';
import { CancionesM5Page } from '../canciones-m5/canciones-m5';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    imagen1 = ImagenBmPage;
    bio1 = BmPage;
    res1 = ReseñasBmPage;
    can1 = CancionesBmPage;
    imagen2 = ImagenM5Page;
    bio2 = M5Page;
    res2 = ReseñasM5Page;
    can2 = CancionesM5Page;
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
  ImagenM5()
  {
    this.navCtrl.push(this.imagen2);
  }
  CanM5()
  {
    this.navCtrl.push(this.can2);
  }
  M5()
  {
    this.navCtrl.push(this.bio2);
  }
  ResM5()
  {
    this.navCtrl.push(this.res2);
  }
}
