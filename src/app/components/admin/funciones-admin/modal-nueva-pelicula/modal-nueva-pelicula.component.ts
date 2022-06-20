import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/components/lista-de-peliculas/pelicula';

@Component({
  selector: 'app-modal-nueva-pelicula',
  templateUrl: './modal-nueva-pelicula.component.html',
  styleUrls: ['./modal-nueva-pelicula.component.css'],
})
export class ModalNuevaPeliculaComponent implements OnInit {
  target: string = 'nuevaPelicula';
  titulo: string = 'Nueva Película';
  pelicula: Pelicula = {
    id: 0,
    titulo: '',
    imagen: '',
    descripcion: '',
    genero: '',
    duracion: '',
    actores: '',
    director: '',
    estreno: true,
    trailer: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
