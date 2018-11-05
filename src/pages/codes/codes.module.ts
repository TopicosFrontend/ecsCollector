import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodesPage } from './codes';

@NgModule({
  declarations: [
    CodesPage,
  ],
  imports: [
    IonicPageModule.forChild(CodesPage),
  ]
})
export class CodesPageModule {}
