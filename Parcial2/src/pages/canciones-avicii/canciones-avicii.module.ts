import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancionesAviciiPage } from './canciones-avicii';

@NgModule({
  declarations: [
    CancionesAviciiPage,
  ],
  imports: [
    IonicPageModule.forChild(CancionesAviciiPage),
  ],
})
export class CancionesAviciiPageModule {}
