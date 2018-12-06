import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private toast:ToastController) {
  }
  onClickRegistrar(){
    let opciones ={
      message         :"hola mundo",
      position        :"middle",
      showCloseButton :true,
      duration        : 10000,
      closeButtonText :"Cerrar"
    }
    let t=this.toast.create(opciones)
    t.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
