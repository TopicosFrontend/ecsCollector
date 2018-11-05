import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'

/**
 * Generated class for the CodesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-codes',
  templateUrl: 'codes.html',
})
export class CodesPage {
  codes = []

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.storage.get('actual_codes').then((val) => {
      if (val != null) {
        this.codes = val;
      }
    });
  }

  generateCode(number) {
    this.codes = [];

    var num = number;
    var i:number;

    for(let i = number; i >= 1; i--) {
       var code = {
         first: Math.floor(10000000 + Math.random() * 90000000),
         second: Math.floor(1000 + Math.random() * 9000)
       }
       this.codes.push(code);
    }
    this.storage.set('actual_codes', this.codes);
  }

}
