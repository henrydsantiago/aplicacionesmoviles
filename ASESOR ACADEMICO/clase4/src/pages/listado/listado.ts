import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {DetallePage} from "../detalle/detalle"
import {PerfilPage} from "../perfil/perfil"
import { HomePage } from '../home/home';
import { LibroProvider } from '../../providers/libro/libro';
import { Libro } from '../../providers/modelo/libro';


@IonicPage()
@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html',
})
export class ListadoPage {

  libros :Libro[]=[];
  
  verPerfil(){
    this.modal.create(PerfilPage).present();
  }
  cerrarSesion(){
    this.navCtrl.setRoot(HomePage);
  }

  verDetalle(){
    this.navCtrl.push(DetallePage,{"parametro":"hola mundo"})
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private modal:ModalController,
              public libroProvider:LibroProvider) {
      
    this.libros = this.libroProvider.getLibros();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPage');
    
  }

}
