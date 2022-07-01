import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, share } from 'rxjs';
import { Pelicula } from '../home/pelicula';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  //PROPIEDADES

  buscador: boolean = false;
  formBusqueda: FormGroup;
  peliculaBuscada: string = '';
  tipoDeUsuario: any; //va a guardar el UserId y va a evaluar si es admin o no, y si no esta logueado
  peliculas: Pelicula[] = [];
  Peliculas: any;

  //CONSTRUCTOR
  constructor(
    protected router: Router,
    private formBuilder: FormBuilder,
    protected httpClient: HttpClient
  ) {
    this.formBusqueda = this.formBuilder.group({
      titulo: new FormControl('', Validators.required),
    });
  }

  //METODOS
  ngOnInit(): void {
    //CARGO LAS PELICULAS PARA HACER LA BUSQUEDA CON EL BUSCAR.
    let res: Observable<Pelicula[]> = this.httpClient
      .get<Pelicula[]>('http://localhost:3000/peliculas')
      .pipe(share());

    res.subscribe(
      (value) => {
        this.Peliculas = value;
        this.peliculas = this.Peliculas.peliculas;
      },
      (error) => {
        Swal.fire('Ocurrió un error', '', 'error');
      }
    );

    //VALIDACION DE USUARIO LOGUEADO O DESLOGUEADO PARA RENDERIZAR EL NAV
    if (localStorage.getItem('IdUser') != null) {
      this.tipoDeUsuario = 'Comun';
    }
    if (
      localStorage.getItem('IdUser') === '6918af43-9fc7-4399-8fa7-65dd66913cff'
    ) {
      this.tipoDeUsuario = 'Admin';
    }
    if (localStorage.getItem('IdUser') == null) {
      this.tipoDeUsuario = null;
    }
  }

  //EL METODO BUSCAR ME TRAE LA PELICULA QUE LE INDICO SI EXISTE.
  mostrarBusqueda() {
    this.peliculas.forEach((pelicula) => {
      if (
        pelicula.titulo
          .toLowerCase()
          .includes(this.formBusqueda.controls['titulo'].value.toLowerCase())
      ) {
        this.router.navigate(['/info/' + pelicula.id]);
        this.buscador = false;
      }
    });
  }

  //CIERRA SESION, LIMPIA EL LOCALSTORAGE.
  logout() {
    localStorage.clear();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
