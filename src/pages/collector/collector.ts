import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CollectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collector',
  templateUrl: 'collector.html',
})
export class CollectorPage {
    collector = {
      name: "Esteban Silva",
      cellphone: 3003162007,
      code: "200033040-31223312",
      status: "Activo"
    }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectorPage');
  }

}
