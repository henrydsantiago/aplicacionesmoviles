import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { DetallePage } from '../detalle/detalle';
import { PeliculaProvider } from '../../providers/pelicula/pelicula';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  resultados = [];
  buscar:string = "";
  n     :number = 0;

  onClickBuscar(){
    let self = this; // Self pasa a ser el this del component, que se usará más adelante
    if (this.buscar.length>2){

      this.resultados=[]
      let loading = this.loading.create({
        content: "Please wait...",
      })

      loading.present()
      this.peliculaService.buscarPelicula(this.buscar).subscribe(
        (res:any) => {
          //si la respuesta es existosa, se ejecuta este bloque
          if (res.Search==undefined){
            self.n=0
          }else{
            self.resultados = res.Search; //Aquí se usa self, porque "this" ya se refiere al objeto
            self.n = res.totalResults     //que está respondiendo la busqueda
            loading.dismiss();
          }
        },
        error =>{
          loading.dismiss();
          //si la respuesta no es exitosa, se ejecuta este bloque
          let toast = this.toast.create({
            message: 'Error al conectarse al Backend',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
        }
      )
    }
  }

  verDetalle(pelicula){
    this.navCtrl.push(DetallePage, {"pelicula":pelicula}) //Esto hace que cargue la pagina Detalle, se coloca encima
  }

  constructor(public navCtrl: NavController,
              private peliculaService: PeliculaProvider,
              private toast: ToastController,
              private loading: LoadingController) {

  }

}
