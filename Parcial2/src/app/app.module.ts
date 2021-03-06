import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ImagenBmPage } from '../pages/imagen-bm/imagen-bm';
import { BmPage } from '../pages/bm/bm';
import { CancionesBmPage } from '../pages/canciones-bm/canciones-bm';
import { ReseñasBmPage } from '../pages/rese\u00F1as-bm/rese\u00F1as-bm';
import { ImagenM5Page } from '../pages/imagen-m5/imagen-m5';
import { M5Page } from '../pages/m5/m5';
import { CancionesM5Page } from '../pages/canciones-m5/canciones-m5';
import { ReseñasM5Page } from '../pages/reseñas-m5/reseñas-m5';
import { LpPage } from '../pages/lp/lp';
import { CancioneslpPage } from '../pages/cancioneslp/cancioneslp';
import { ReseñaslpPage } from '../pages/reseñaslp/reseñaslp';
import { ImagenlpPage } from '../pages/imagenlp/imagenlp';
import { PmPage } from '../pages/pm/pm';
import { CancionesPmPage } from '../pages/canciones-pm/canciones-pm';
import { ReseñasPmPage } from '../pages/reseñas-pm/reseñas-pm';
import { ImagenPmPage } from '../pages/imagen-pm/imagen-pm';
import { AviciiPage } from '../pages/avicii/avicii';
import { CancionesAviciiPage } from '../pages/canciones-avicii/canciones-avicii';
import { ReseñasAviciiPage } from '../pages/reseñas-avicii/reseñas-avicii';
import { ImagenAviciiPage } from '../pages/imagen-avicii/imagen-avicii';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ImagenBmPage,
    BmPage,
    CancionesBmPage,
    ReseñasBmPage,
    ImagenM5Page,
    M5Page,
    CancionesM5Page,
    ReseñasM5Page,
    LpPage,
    CancioneslpPage,
    ReseñaslpPage,
    ImagenlpPage,
    PmPage,
    CancionesPmPage,
    ReseñasPmPage,
    ImagenPmPage,
    AviciiPage,
    CancionesAviciiPage,
    ReseñasAviciiPage,
    ImagenAviciiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ImagenBmPage,
    BmPage,
    CancionesBmPage,
    ReseñasBmPage,
    ImagenM5Page,
    M5Page,
    CancionesM5Page,
    ReseñasM5Page,
    LpPage,
    CancioneslpPage,
    ReseñaslpPage,
    ImagenlpPage,
    PmPage,
    CancionesPmPage,
    ReseñasPmPage,
    ImagenPmPage,
    AviciiPage,
    CancionesAviciiPage,
    ReseñasAviciiPage,
    ImagenAviciiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
