import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, share } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-funciones-pelicula',
  templateUrl: './modal-funciones-pelicula.component.html',
  styleUrls: ['./modal-funciones-pelicula.component.css'],
})
export class ModalFuncionesPeliculaComponent implements OnInit {
  target: string = 'funcionesPelicula';
  titulo: string = '';
  form: FormGroup;
  @Input() idPelicula: number = 0;
  @Input() tituloPelicula: string = '';

  constructor(private fb: FormBuilder, protected httpClient: HttpClient) {
    this.form = this.fb.group({
      funciones: this.fb.array([
        this.fb.group({
          sala: [null, Validators.required],
          fecha: ['', Validators.required],
          horario: ['', Validators.required],
        }),
      ]),
    });
  }

  ngOnChanges(cambios: any): void {
    this.idPelicula = cambios['idPelicula'].currentValue;
    this.titulo = 'Agregar funciones de ' + this.tituloPelicula;
  }

  agregarFuncion(): void {
    const lista = this.form.controls['funciones'] as FormArray;
    lista.push(
      this.fb.group({
        sala: [null, Validators.required],
        fecha: ['', Validators.required],
        horario: ['', Validators.required],
      })
    );
  }

  eliminarFuncion(index: number): void {
    const lista = this.form.controls['funciones'] as FormArray;
    lista.removeAt(index);
  }

  submit(): void {
    const datosAEnviar = { funciones: [], idPelicula: 0 };
    datosAEnviar.funciones = this.form.get('funciones')?.value;
    datosAEnviar.idPelicula = this.idPelicula;
    this.httpClient
      .post('http://localhost:3000/admin/funciones/agregar', datosAEnviar)
      .pipe(share())
      .subscribe(
        (val) => {
          Swal.fire({
            title: 'Funciones agregadas correctamente',
            icon: 'success',
          }).then((result) => location.reload());
        },
        (err) => Swal.fire(err.error.mensaje, '', 'error')
      );
  }

  ngOnInit(): void {}
}
