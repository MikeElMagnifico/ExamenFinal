import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancionesBmPage } from './canciones-bm';

@NgModule({
  declarations: [
    CancionesBmPage,
  ],
  imports: [
    IonicPageModule.forChild(CancionesBmPage),
  ],
})
export class CancionesBmPageModule {}
