import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, share } from 'rxjs';
import { Funcion } from 'src/app/components/funciones/Funcion';
import { ListaFunciones } from './ListaFunciones';

@Component({
  selector: 'app-modal-funciones-pelicula',
  templateUrl: './modal-funciones-pelicula.component.html',
  styleUrls: ['./modal-funciones-pelicula.component.css'],
})
export class ModalFuncionesPeliculaComponent implements OnInit {
  target: string = 'funcionesPelicula';
  titulo: string = '';
  form: FormGroup;
  funcion: Funcion = {
    idFuncion: 0,
    idPelicula: 0,
    titulo: '',
    sala: 0,
    dia: '',
    fecha: '',
    horario: '',
    valorEntrada: 0,
    entradasDisponibles: 0,
  };
  @Input() idPelicula: number = 0;
  @Input() tituloPelicula: string = '';

  constructor(private fb: FormBuilder, protected httpClient: HttpClient) {
    this.form = this.fb.group({
      funciones: this.fb.array([
        this.fb.group({
          // idFuncion: [0, Validators.required],
          // idPelicula: [0, Validators.required],
          //titulo: ['', Validators.required],
          sala: [null, Validators.required],
          // dia: ['', Validators.required],
          fecha: ['', Validators.required],
          horario: ['', Validators.required],
          // valorEntrada: [0, Validators.required],
          // entradasDisponibles: [0, Validators.required],
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
    lista.push(this.fb.group(this.funcion));
  }

  eliminarFuncion(index: number): void {
    const lista = this.form.controls['funciones'] as FormArray;
    lista.removeAt(index);
  }

  submit(): void {
    console.log(this.form.get('funciones')?.value);
    //location.reload();
  }

  ngOnInit(): void {}
}
