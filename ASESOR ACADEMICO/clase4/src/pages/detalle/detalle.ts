import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  datoRecibido :string

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
                
      this.datoRecibido= navParams.get("parametro");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

}
