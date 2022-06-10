import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDePeliculasComponent } from './components/lista-de-peliculas/lista-de-peliculas.component';
import { HomeComponent } from './components/home/home.component';
import { InfoPeliculasComponent } from './components/info-peliculas/info-peliculas.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FuncionesAdminComponent } from './components/admin/funciones-admin/funciones-admin.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ModalGeneralComponent } from './components/modal-general/modal-general.component';
import { FuncionesComponent } from './components/funciones/funciones.component';
import { ModalNuevaPeliculaComponent } from './components/admin/funciones-admin/modal-nueva-pelicula/modal-nueva-pelicula.component';
import { ModalDetallesPeliculaComponent } from './components/admin/funciones-admin/modal-detalles-pelicula/modal-detalles-pelicula.component';
import { ModalEditarPeliculaComponent } from './components/admin/funciones-admin/modal-editar-pelicula/modal-editar-pelicula.component';
import { ModalEliminarPeliculaComponent } from './components/admin/funciones-admin/modal-eliminar-pelicula/modal-eliminar-pelicula.component';
import { ModalFuncionesPeliculaComponent } from './components/admin/funciones-admin/modal-funciones-pelicula/modal-funciones-pelicula.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaDePeliculasComponent,
    HomeComponent,
    InfoPeliculasComponent,
    AuthenticationComponent,
    FooterComponent,
    NavComponent,
    FuncionesComponent,
    FuncionesAdminComponent,
    ReservaComponent,
    ModalGeneralComponent,
    ModalNuevaPeliculaComponent,
    ModalDetallesPeliculaComponent,
    ModalEditarPeliculaComponent,
    ModalEliminarPeliculaComponent,
    ModalFuncionesPeliculaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
