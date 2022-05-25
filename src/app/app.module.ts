import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDePeliculasComponent } from './lista-de-peliculas/lista-de-peliculas.component';
import { HomeComponent } from './home/home.component';
import { InfoPeliculasComponent } from './info-peliculas/info-peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDePeliculasComponent,
    HomeComponent,
    InfoPeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
