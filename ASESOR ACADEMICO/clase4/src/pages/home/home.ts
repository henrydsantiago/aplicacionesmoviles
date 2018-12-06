import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ListadoPage } from '../listado/listado';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario :string
  clave   :string

  iniciarSesion(){
    if (this.usuario=="admin" && this.clave=="admin"){
      //this.navCtrl.push(ListadoPage)
      // cambia la pagina principal de la aplicacion
      this.navCtrl.setRoot(ListadoPage);
    }else{
      this.alert.create({
        message :"Error. Usuario o clave incorrectos",
        buttons : ["Aceptar"]
      }).present();
    }
  }

  constructor(public navCtrl: NavController,
              private alert:AlertController) {

  }

}
