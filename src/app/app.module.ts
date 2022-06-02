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
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [
    AppComponent,
    ListaDePeliculasComponent,
    HomeComponent,
    InfoPeliculasComponent,
    AuthenticationComponent,
    FooterComponent,
    NavComponent,
    CarteleraComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, YouTubePlayerModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
