import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string;
  password:string;
  constructor(public navCtrl: NavController) {

  }

  login() {
    this.navCtrl.setRoot(InfoPage);
  }
}
