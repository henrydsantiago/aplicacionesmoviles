import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  cursos : Curso[];
  nombre = "jose"
  constructor(public navCtrl: NavController) {
    this.cursos =[];
    this.cursos.push(new Curso("JavaScript",1500,"Lenguaje de programacion","./assets/imgs/2.jpg"));
    this.cursos.push(new Curso("HTML",1350,"Etiquetas para mostrar informacion","./assets/imgs/3.jpg"));
    this.cursos.push(new Curso("Angular",1800,"","./assets/imgs/4.jpg"));
    this.cursos.push(new Curso("Ionic",3000,"","./assets/imgs/1.jpg"));
   }
}

class Curso{


  public constructor(
      public nombre:string,
      public precio:number,
      public descripcion:string,
      public imagen:string){

  }
}