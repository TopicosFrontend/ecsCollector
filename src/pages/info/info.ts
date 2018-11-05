import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CodesPage } from '../codes/codes';
import { CollectorPage } from '../collector/collector';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  viewCodes() { this.navCtrl.push(CodesPage); }
  viewCollector() { this.navCtrl.push(CollectorPage); }

}
