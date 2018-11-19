import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { HttpClient  } from '@angular/common/http';

/**
 * Generated class for the CodesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-codes',
  templateUrl: 'codes.html'
})
export class CodesPage {
  number = null
  codes = []

  server = "http://ecsbackend.mybluemix.net/collector/generate_codes/"


  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    // this.storage.get('actual_codes').then((val) => {
    //   if (val != null) {
    //     this.codes = val;
    //   }
    // });
  }

  generateCode(number) {
    const httpOptions = {
      withCredentials: true
    };

    this.http.get(this.server + "?number=" + this.number, httpOptions).subscribe(response => {
      console.log(response)
      this.codes = response["codes"]
      this.storage.set('actual_codes', this.codes);
    });
  }

}
