import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListadoPage } from '../pages/listado/listado';
import { PerfilPage } from '../pages/perfil/perfil';
import { DetallePage } from '../pages/detalle/detalle';
import { LibroProvider } from '../providers/libro/libro';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListadoPage,
    PerfilPage,
    DetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListadoPage,
    PerfilPage,
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LibroProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
