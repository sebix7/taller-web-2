import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/components/lista-de-peliculas/pelicula';

@Component({
  selector: 'app-modal-editar-pelicula',
  templateUrl: './modal-editar-pelicula.component.html',
  styleUrls: ['./modal-editar-pelicula.component.css'],
})
export class ModalEditarPeliculaComponent implements OnInit {
  target: string = 'editarPelicula';
  titulo: string = 'Editar Película';
  @Input() pelicula: Pelicula = {
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
