import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDePeliculasComponent } from './lista-de-peliculas/lista-de-peliculas.component';

const routes: Routes = [
  { path: 'peliculas', component: ListaDePeliculasComponent },//esta

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
