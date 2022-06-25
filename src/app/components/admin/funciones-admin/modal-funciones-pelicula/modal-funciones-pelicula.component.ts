import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Funcion } from './Funcion';
import { ListaFunciones } from './ListaFunciones';

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
  @Input() idPelicula: number = 0;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      funciones: this.fb.array([this.fb.group(this.funcion)]),
    });
  }

  ngOnChanges(cambios: any): void {
    this.idPelicula = cambios['idPelicula'].currentValue;
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
    const listaFunciones = {
      idPelicula: this.idPelicula,
      funciones: this.form.value,
    } as ListaFunciones;
    console.log(listaFunciones);
    location.reload();
  }

  ngOnInit(): void {}
}
