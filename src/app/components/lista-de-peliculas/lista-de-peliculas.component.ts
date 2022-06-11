import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, share } from 'rxjs';
import { Pelicula } from '../home/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './lista-de-peliculas.component.html',
  styleUrls: ['./lista-de-peliculas.component.css'],
})
export class ListaDePeliculasComponent implements OnInit {
  peliculas: Pelicula[] = [];
  Peliculas: any;

  constructor(protected router: Router, protected httpClient: HttpClient) {}

  ngOnInit(): void {
    let res: Observable<Pelicula[]> = this.httpClient
      .get<Pelicula[]>('http://localhost:3000/peliculas')
      .pipe(share());

    res.subscribe(
      (value) => {
        this.Peliculas = value;
        this.peliculas = this.Peliculas;
      },
      (error) => {
        console.log('ocurrio un error');
      }
    );
  }
}
