import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient  } from '@angular/common/http';

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
  collector = {}

  server = "http://ecsbackend.mybluemix.net/collector/get_info/"

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    const httpOptions = {
      withCredentials: true
    };

    this.http.get(this.server, httpOptions).subscribe(response => {
      this.collector = response
      console.log(response)
    });
  }

}
