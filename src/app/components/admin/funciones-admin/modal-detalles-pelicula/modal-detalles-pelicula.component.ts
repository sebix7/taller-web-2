import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/components/lista-de-peliculas/pelicula';

@Component({
  selector: 'app-modal-detalles-pelicula',
  templateUrl: './modal-detalles-pelicula.component.html',
  styleUrls: ['./modal-detalles-pelicula.component.css'],
})
export class ModalDetallesPeliculaComponent implements OnInit {
  target: string = 'detallesPelicula';
  @Input() pelicula: Pelicula = {
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
  titulo: string = 'Detalles de la película';

  constructor() {}

  ngOnInit(): void {}
}
