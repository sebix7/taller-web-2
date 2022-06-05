import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Funcion } from './Funcion';

@Component({
  selector: 'app-modal-funciones-pelicula',
  templateUrl: './modal-funciones-pelicula.component.html',
  styleUrls: ['./modal-funciones-pelicula.component.css'],
})
export class ModalFuncionesPeliculaComponent implements OnInit {
  target: string = 'funcionesPelicula';
  titulo: string = 'Funciones de la Película';
  form: FormGroup;
  funcion: Funcion = {
    fecha: ['', Validators.required],
    horario: ['', Validators.required],
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      funciones: this.fb.array([this.fb.group(this.funcion)]),
    });
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
    console.log(this.form.controls['funciones'].value);
  }

  ngOnInit(): void {}
}
