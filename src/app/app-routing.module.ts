import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoPeliculasComponent } from './components/info-peliculas/info-peliculas.component';
import { ListaDePeliculasComponent } from './components/lista-de-peliculas/lista-de-peliculas.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { FuncionesComponent } from './components/funciones/funciones.component';
import { ReservaComponent } from './components/reserva/reserva.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'peliculas', component: ListaDePeliculasComponent },
  { path: 'info/:id', component: InfoPeliculasComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: 'funciones', component: FuncionesComponent },
  { path: 'reserva', component: ReservaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
