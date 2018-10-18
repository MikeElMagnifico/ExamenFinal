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
import { ImagenlpPage } from '../imagenlp/imagenlp';
import { LpPage } from '../lp/lp';
import { ReseñaslpPage } from '../reseñaslp/reseñaslp';
import { CancioneslpPage } from '../cancioneslp/cancioneslp';
import { ImagenPmPage } from '../imagen-pm/imagen-pm';
import { PmPage } from '../pm/pm';
import { ReseñasPmPage } from '../reseñas-pm/reseñas-pm';
import { CancionesPmPage } from '../canciones-pm/canciones-pm';
import { ImagenAviciiPage } from '../imagen-avicii/imagen-avicii';
import { AviciiPage } from '../avicii/avicii';
import { ReseñasAviciiPage } from '../reseñas-avicii/reseñas-avicii';
import { CancionesAviciiPage } from '../canciones-avicii/canciones-avicii';

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
    imagen3 = ImagenlpPage;
    bio3 = LpPage;
    res3 = ReseñaslpPage;
    can3 = CancioneslpPage;
    imagen4 = ImagenPmPage;
    bio4 = PmPage;
    res4 = ReseñasPmPage;
    can4 = CancionesPmPage;
    imagen5 = ImagenAviciiPage;
    bio5 = AviciiPage;
    res5 = ReseñasAviciiPage;
    can5 = CancionesAviciiPage;
  constructor(public navCtrl: NavController) {

  }

  Imagen(dato)
  {
    switch(dato)
    {
      case 1: this.navCtrl.push(this.imagen3);break;
      case 2: this.navCtrl.push(this.imagen4);break;
      case 3: this.navCtrl.push(this.imagen5);break;
      case 4: this.navCtrl.push(this.imagen2);break;
      case 5: this.navCtrl.push(this.imagen1);break;
    }
  }
  Can(dato2)
  {
    switch(dato2)
    {
      case 1: this.navCtrl.push(this.can3);break;
      case 2: this.navCtrl.push(this.can4);break;
      case 3: this.navCtrl.push(this.can5);break;
      case 4: this.navCtrl.push(this.can2);break;
      case 5: this.navCtrl.push(this.can1);break;

    }
  }
  Bio(dato3)
  {
    switch(dato3)
    {
      case 1: this.navCtrl.push(this.bio3);break;
      case 2: this.navCtrl.push(this.bio4);break;
      case 3: this.navCtrl.push(this.bio5);break;
      case 4: this.navCtrl.push(this.bio2);break;
      case 5: this.navCtrl.push(this.bio1);break;
    }
  }
  Res(dato4)
  {
    switch(dato4)
    {
      case 1: this.navCtrl.push(this.res3);break;
      case 2: this.navCtrl.push(this.res4);break;
      case 3: this.navCtrl.push(this.res5);break;
      case 4: this.navCtrl.push(this.res2);break;
      case 5: this.navCtrl.push(this.res1);break;
    }
  }
}
