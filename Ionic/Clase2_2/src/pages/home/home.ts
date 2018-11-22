import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  cursos: Curso[]

  constructor(public navCtrl: NavController) {
    this.cursos = []
    this.cursos.push(new Curso ("JavaScript",1500,"Aprende JavaScript","1.jpg"))
    this.cursos.push(new Curso ("HTML",1000,"Etiquetas de diseño web","2.jpg"))
    this.cursos.push(new Curso ("Angular",1800,"Maneja facilmente JavaScript","3.jpg"))
    this.cursos.push(new Curso ("Ionic",2000,"Aplicaciones moviles","4.jpg"))
  }

}

class Curso{
  nombre:String
  precio:number
  descripcion:String
  imagen:String

  public constructor(name:String, price: number, desc: String,img:String){
    this.nombre=name
    this.precio=price
    this.descripcion= desc
    this.imagen=img
  }
}