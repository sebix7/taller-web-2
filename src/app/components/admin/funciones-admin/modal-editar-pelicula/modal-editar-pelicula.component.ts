import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-editar-pelicula',
  templateUrl: './modal-editar-pelicula.component.html',
  styleUrls: ['./modal-editar-pelicula.component.css'],
})
export class ModalEditarPeliculaComponent implements OnInit {
  target: string = 'editarPelicula';
  titulo: string = 'Editar Película';

  constructor() {}

  ngOnInit(): void {}
}
