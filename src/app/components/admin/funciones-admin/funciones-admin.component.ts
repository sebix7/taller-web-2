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
    //this.router.navigate(['/']);
    let res: Observable<Pelicula[]> = this.httpClient
      .get<Pelicula[]>('http://localhost:3000/peliculas')
      .pipe(share());

    res.subscribe(
      (value) => {
        console.log(value);
        this.Peliculas = value;
        this.peliculas = this.Peliculas.peliculas;
      },
      (error) => {
        console.log('ocurrio un error');
      }
    );
  }

  setPelicula(pelicula: Pelicula): void {
    this.peliculaElegida = pelicula;
  }

  ngOnChanges(cambios: any): void {
    console.log(cambios);
  }
}
