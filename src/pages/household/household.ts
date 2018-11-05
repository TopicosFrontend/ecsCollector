import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HouseholdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-household',
  templateUrl: 'household.html',
})
export class HouseholdPage {
  households = [
    { holder: "Esteban", code: "12eikomsdfk23ioj41", direction: "Carrera 23#30-123" },
    { holder: "Laura", code: "12eikomsdfk23ioj41", direction: "Carrera 23#30-123" },
    { holder: "Valentina", code: "12eikomsdfk23ioj41", direction: "Carrera 23#30-123" },
    { holder: "Orlando", code: "12eikomsdfk23ioj41", direction: "Carrera 23#30-123" }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HouseholdPage');
  }

}
