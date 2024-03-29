import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { Pelicula } from '../home/pelicula';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-info-peliculas',
  templateUrl: './info-peliculas.component.html',
  styleUrls: ['./info-peliculas.component.css'],
})
export class InfoPeliculasComponent implements OnInit {
  pelicula: Pelicula = {
    id: 0,
    titulo: '',
    imagen: '',
    descripcion: '',
    genero: '',
    duracion: '',
    actores: '',
    director: '',
    trailer: '',
    estreno: true,
  };

  Peliculas: any;
  idPelicula: any;
  constructor(
    protected router: Router,
    protected httpClient: HttpClient,
    protected route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.idPelicula = this.route.snapshot.paramMap.get('id');

    let res: Observable<Pelicula[]> = this.httpClient
      .get<Pelicula[]>(`http://localhost:3000/peliculas/${this.idPelicula}`)
      .pipe(share());
    res.subscribe(
      (value) => {
        this.Peliculas = value;
        this.pelicula = this.Peliculas;
      },
      (error) => {
        Swal.fire('Ocurrió un error', '', 'error');
      }
    );
  }
}
