import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas=["Estudiar para el examen de JavaScript 2",
          "Desafio 1 de Framework",
          "Instalar Ionic"]
  constructor(
    public navCtrl: NavController,
    public alert:AlertController  ) {

  }
  onClickTarea(x){
    this.alert.create({
      message:x,
    }).present();
  }
  onClickEliminar(tarea){
    let arr=this.tareas;
    this.alert.create({
      title:"Confirmación",
      message: "Seguro desea eliminar la tarea ?",
      buttons:[
        {
          text    : "Si",
          handler : function (){
            let pos=arr.indexOf(tarea);
            arr.splice(pos,1);
          }
        },
        {
          text    : "No"
        }
      ]
    }).present();
  }

  onClickAgregar(){
    let arr = this.tareas;
    this.alert.create({
      title:"Agregar Tarea",
      inputs:[
        {
          name:"tarea",
          placeholder:"Introduzca la tarea"
        }
      ],
      buttons:[
        {
          text    : "Agregar",
          handler : function (data){
            arr.push(data.tarea)
          }
        }
      ]
    }).present();
  }
}
