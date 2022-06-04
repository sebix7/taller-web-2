import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-funciones-pelicula',
  templateUrl: './modal-funciones-pelicula.component.html',
  styleUrls: ['./modal-funciones-pelicula.component.css'],
})
export class ModalFuncionesPeliculaComponent implements OnInit {
  target: string = 'funcionesPelicula';
  titulo: string = 'Funciones de la Película';

  constructor() {}

  ngOnInit(): void {}
}
