import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  JsonpClientBackend,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { share, catchError } from 'rxjs/operators';
import { Pelicula } from '../../lista-de-peliculas/pelicula';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-funciones-admin',
  templateUrl: './funciones-admin.component.html',
  styleUrls: ['./funciones-admin.component.css'],
})
export class FuncionesAdminComponent implements OnInit {
  peliculas: Pelicula[] = [];

  Peliculas: any;

  peliculaElegida: Pelicula = {
    id: 0,
    titulo: '',
    imagen: null,
    descripcion: '',
    genero: '',
    duracion: '',
    actores: '',
    director: '',
    estreno: true,
    trailer: '',
  };

  constructor(protected router: Router, protected httpClient: HttpClient) {}

  ngOnInit(): void {
    // Para redirigir si no está logueado

    const user_id = localStorage.getItem('IdUser');
    if (user_id != '9b2e856e-7478-40ac-b9dc-99d0facd92ee') {
      this.router.navigate(['/']);
    } else {
      let res: Observable<Pelicula[]> = this.httpClient
        .get<Pelicula[]>('http://localhost:3000/peliculas')
        .pipe(share());

      res.subscribe(
        (value) => {
          this.Peliculas = value;
          this.peliculas = this.Peliculas.peliculas;
        },
        (error) => {
          Swal.fire('Ocurrió un error', '', 'error');
        }
      );
    }
  }

  setPelicula(pelicula: Pelicula): void {
    this.peliculaElegida = pelicula;
  }
}
