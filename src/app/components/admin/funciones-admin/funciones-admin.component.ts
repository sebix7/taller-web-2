import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, JsonpClientBackend } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { share, catchError } from 'rxjs/operators';
import { Pelicula } from '../../home/pelicula';

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
    imagen: '',
    descripcion: '',
    genero: '',
    duracion: '',
    actores: '',
    director: '',
    estreno: true,
    trailer: ''
  };

  constructor(protected router: Router, protected httpClient: HttpClient) {

  }

  ngOnInit(): void {
    let res: Observable<Pelicula[]> =
     this.httpClient.get<Pelicula[]>('http://localhost:3000/')
     .pipe(share());

     res.subscribe( 

      value => { 
        console.log(value)
         this.Peliculas = value;
         this.peliculas = this.Peliculas;

      },
      error => {
        console.log('ocurrio un error');
      });

      
  }

  setPelicula(pelicula: Pelicula): void {
    this.peliculaElegida = pelicula;
  }

}

  

