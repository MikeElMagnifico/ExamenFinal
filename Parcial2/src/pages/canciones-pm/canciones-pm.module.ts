import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancionesPmPage } from './canciones-pm';

@NgModule({
  declarations: [
    CancionesPmPage,
  ],
  imports: [
    IonicPageModule.forChild(CancionesPmPage),
  ],
})
export class CancionesPmPageModule {}
