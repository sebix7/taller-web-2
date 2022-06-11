import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/components/lista-de-peliculas/pelicula';

@Component({
  selector: 'app-modal-eliminar-pelicula',
  templateUrl: './modal-eliminar-pelicula.component.html',
  styleUrls: ['./modal-eliminar-pelicula.component.css'],
})
export class ModalEliminarPeliculaComponent implements OnInit {
  target: string = 'eliminarPelicula';
  titulo: string = 'Eliminar Película';
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
  };

  constructor() {}

  onDelete(id: number): void {
    console.log('Eliminado: ' + id);
  }

  ngOnInit(): void {}
}
