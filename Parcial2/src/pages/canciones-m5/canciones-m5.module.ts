import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancionesM5Page } from './canciones-m5';

@NgModule({
  declarations: [
    CancionesM5Page,
  ],
  imports: [
    IonicPageModule.forChild(CancionesM5Page),
  ],
})
export class CancionesM5PageModule {}
