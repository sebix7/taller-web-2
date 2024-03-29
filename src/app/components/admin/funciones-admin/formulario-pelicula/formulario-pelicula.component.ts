import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { share } from 'rxjs';
import { Pelicula } from 'src/app/components/lista-de-peliculas/pelicula';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css'],
})
export class FormularioPeliculaComponent implements OnInit {
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
  cargarPelicula: FormGroup;

  constructor(private fb: FormBuilder, protected httpClient: HttpClient) {
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

  tomarImagen(e: any) {
    this.cargarPelicula.get('imagen')?.markAsTouched();
    const archivo = e.target.files[0] as File;
    const listaFormatos = ['jpg', 'jpeg', 'png'];
    const formatoArchivo = archivo.type.split('/')[1];
    if (
      archivo.type.includes('image') &&
      listaFormatos.includes(formatoArchivo)
    ) {
      this.cargarPelicula.get('imagen')?.setValue(archivo);
    } else {
      this.cargarPelicula.get('imagen')?.setErrors({ required: true });
    }
  }

  submit(): void {
    if (this.cargarPelicula.invalid) return;
    this.pelicula = this.cargarPelicula.value;
    let formData: FormData = new FormData();
    for (let key of Object.keys(this.pelicula)) {
      if (
        key != 'imagen' ||
        typeof this.cargarPelicula.get(key)?.value === 'string'
      ) {
        formData.append(key, this.cargarPelicula.get(key)?.value);
      } else {
        const archivo = this.cargarPelicula.get(key)?.value as File;
        formData.append(key, archivo, archivo.name);
      }
    }
    if (this.pelicula.id) {
      this.httpClient
        .put('http://localhost:3000/admin/pelicula/editar', formData)
        .pipe(share())
        .subscribe(
          (val) => {
            Swal.fire({
              title: 'Película editada correctamente correctamente',
              icon: 'success',
            }).then((result) => location.reload());
          },
          (err) => Swal.fire(err.error.mensaje, '', 'error')
        );
    } else {
      this.httpClient
        .post('http://localhost:3000/admin/pelicula/nueva', formData)
        .pipe(share())
        .subscribe(
          (val) => {
            Swal.fire({
              title: 'Película creada correctamente',
              icon: 'success',
            }).then((result) => location.reload());
          },
          (err) => Swal.fire(err.error.mensaje, '', 'error')
        );
    }
  }
}
