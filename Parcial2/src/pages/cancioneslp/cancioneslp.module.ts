import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancioneslpPage } from './cancioneslp';

@NgModule({
  declarations: [
    CancioneslpPage,
  ],
  imports: [
    IonicPageModule.forChild(CancioneslpPage),
  ],
})
export class CancioneslpPageModule {}
