import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-nueva-pelicula',
  templateUrl: './modal-nueva-pelicula.component.html',
  styleUrls: ['./modal-nueva-pelicula.component.css'],
})
export class ModalNuevaPeliculaComponent implements OnInit {
  target: string = 'nuevaPelicula';
  titulo: string = 'Nueva Película';

  constructor() {}

  ngOnInit(): void {}
}
