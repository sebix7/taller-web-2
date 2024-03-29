import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoPeliculasComponent } from './components/info-peliculas/info-peliculas.component';
import { ListaDePeliculasComponent } from './components/lista-de-peliculas/lista-de-peliculas.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { FuncionesComponent } from './components/funciones/funciones.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { FuncionesAdminComponent } from './components/admin/funciones-admin/funciones-admin.component';
import { CandySnackStoreComponent } from './components/candy-snack-store/candy-snack-store.component';
import { HistorialReservaComponent } from './components/reserva/historial-reserva/historial-reserva.component';
import { CarritoComponent } from './components/carrito/carrito.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'peliculas', component: ListaDePeliculasComponent },
  { path: 'info/:id', component: InfoPeliculasComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: 'funciones/:titulo/:idPeli', component: FuncionesComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'reserva/:titulo/:idPeli/:fecha/:horario', component: ReservaComponent },
  { path: 'administrador/funciones', component: FuncionesAdminComponent },
  { path: 'store', component: CandySnackStoreComponent},
  { path: 'historial-reservas', component: HistorialReservaComponent},
  { path: 'carrito', component: CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
