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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ImagenBmPage,
    BmPage,
    CancionesBmPage,
    ReseñasBmPage
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
    ReseñasBmPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
