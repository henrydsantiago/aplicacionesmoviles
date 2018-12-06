import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  cerrar(){
    // cierra la ventana modal
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
