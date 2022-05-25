import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoPeliculasComponent } from './info-peliculas/info-peliculas.component';
import { ListaDePeliculasComponent } from './lista-de-peliculas/lista-de-peliculas.component';

const routes: Routes = [
  { path: '', component: HomeComponent},//esta
  { path: 'peliculas', component: ListaDePeliculasComponent },//esta
  { path: 'info/:id', component: InfoPeliculasComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
