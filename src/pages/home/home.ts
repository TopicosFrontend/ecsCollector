import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { HttpHeaders, HttpClient  } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = "jaimito";
  password = "hola1234";

  server = "http://localhost:8000/collector/login/"


  constructor(public navCtrl: NavController, public http: HttpClient) {

  }

  login() {
    const req = {user: this.username, password: this.password}
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       }),
      withCredentials: true
    };

    this.http.post(this.server, req, httpOptions).subscribe(response => {
      console.log(response)
      if (response["state"] == 'true') {
          this.navCtrl.setRoot(InfoPage);
      }else{
        alert("Copiaste mal tus credenciasles")
      }
    }, err => {
      console.log(err);
      alert("Error, favor intentarlo mas tarde");
    });

  }
}
