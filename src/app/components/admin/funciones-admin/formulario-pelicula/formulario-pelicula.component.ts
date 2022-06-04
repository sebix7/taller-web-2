import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pelicula } from 'src/app/components/lista-de-peliculas/pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css'],
})
export class FormularioPeliculaComponent implements OnInit {
  @Input() pelicula: Pelicula = {
    id: 0,
    titulo: '',
    imagen: '',
    descripcion: '',
    genero: '',
    duracion: '',
    actores: '',
    director: '',
  };

  constructor() {}

  cargarDatosPelicula = new FormGroup({
    id: new FormControl(this.pelicula.id),
    titulo: new FormControl(this.pelicula.titulo, [Validators.required]),
    //imagen: new FormControl(this.pelicula.imagen, [Validators.required]),
    descripcion: new FormControl(this.pelicula.descripcion, [
      Validators.required,
    ]),
    genero: new FormControl(this.pelicula.genero, [Validators.required]),
    duracion: new FormControl(this.pelicula.duracion, [Validators.required]),
    actores: new FormControl(this.pelicula.actores, [Validators.required]),
    director: new FormControl(this.pelicula.director, [Validators.required]),
  });

  ngOnInit(): void {}

  submit(): void {
    this.pelicula = this.cargarDatosPelicula.value;
    console.log(this.cargarDatosPelicula.value);
  }
}
