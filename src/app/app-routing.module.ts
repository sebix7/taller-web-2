import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoPeliculasComponent } from './components/info-peliculas/info-peliculas.component';
import { ListaDePeliculasComponent } from './components/lista-de-peliculas/lista-de-peliculas.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //esta
  { path: 'peliculas', component: ListaDePeliculasComponent }, //esta
  { path: 'info/:id', component: InfoPeliculasComponent },
  { path: 'login', component: AuthenticationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
