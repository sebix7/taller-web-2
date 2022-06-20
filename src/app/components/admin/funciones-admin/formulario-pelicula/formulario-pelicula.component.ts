import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
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
    estreno: true,
    trailer: '',
  };
  cargarPelicula: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cargarPelicula = this.fb.group({
      id: [this.pelicula.id],
      titulo: [this.pelicula.titulo, Validators.required],
      imagen: [this.pelicula.imagen, Validators.required],
      descripcion: [this.pelicula.descripcion, Validators.required],
      genero: [this.pelicula.genero, Validators.required],
      duracion: [this.pelicula.duracion, Validators.required],
      actores: [this.pelicula.actores, Validators.required],
      director: [this.pelicula.director, Validators.required],
      trailer: [this.pelicula.trailer, Validators.required],
      estreno: [this.pelicula.estreno],
    });
  }

  ngOnInit(): void {}

  ngOnChanges(cambios: any): void {
    this.pelicula = cambios['pelicula'].currentValue;
    this.cargarPelicula.setValue(cambios['pelicula'].currentValue);
  }

  submit(): void {
    if (this.cargarPelicula.invalid) return;
    console.log(this.pelicula);
    location.reload();
  }
}
