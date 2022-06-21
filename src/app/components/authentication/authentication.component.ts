import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { datosDeRegistro } from './datosDeRegistro';
import { Observable, share } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  public screen: number;
  public formRegistro: any;
  public formLogin: any;
  public errors: any;
  public passwordRegex: any;

  constructor(
    protected router: Router,
    private formBuilder: FormBuilder,
    protected httpClient: HttpClient
  ) {
    this.screen = 1;
    this.formLogin = FormGroup;
    this.formRegistro = FormGroup;
    this.errors = {
      nombre: '',
      apellido: '',
      direccion: '',
      email: '',
      password: '',
      registro: '',
    };
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    this.formRegistro = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        // Validators.pattern
      ]),
    });
  }

  changeScreen() {
    this.screen = this.screen === 1 ? 2 : 1;
  }

  login(): any {
    // console.log(this.formLogin.controls.email.invalid);
    // console.log(this.formLogin.value.email);
  }

  registrar(): any {
    if (
      this.formRegistro.controls.nombre.invalid === true ||
      this.formRegistro.controls.apellido.invalid === true ||
      this.formRegistro.controls.direccion.invalid === true ||
      this.formRegistro.controls.email.invalid === true ||
      this.formRegistro.controls.password.invalid === true
    ) {
      this.formRegistro.controls.nombre.invalid === true
        ? (this.errors.nombre = 'El nombre es obligatorio')
        : (this.errors.nombre = '');

      this.formRegistro.controls.apellido.invalid === true
        ? (this.errors.apellido = 'El apellido es obligatorio')
        : (this.errors.apellido = '');

      this.formRegistro.controls.direccion.invalid === true
        ? (this.errors.direccion = 'La direccion es obligatoria')
        : (this.errors.direccion = '');

      this.formRegistro.controls.email.invalid === true
        ? (this.errors.email = 'Ingrese un email valido')
        : (this.errors.email = '');

      this.formRegistro.controls.password.invalid === true
        ? (this.errors.password =
            'La contraseña debe tener mínimo 8 caracteres')
        : (this.errors.password = '');
    } else {
      const body = this.formRegistro.value;

      let res: Observable<Response[]> = this.httpClient
        .post<Response[]>(`http://localhost:3000/auth`, body)
        .pipe(share());

      res.subscribe(
        (value) => {
          // console.log(value);
          Swal.fire('Registro exitoso', '', 'success');
        },
        (error) => {
          console.log(error.errors);
          Swal.fire('Error al registrar el usuario', '', 'error');
        }
      );

      this.errors.nombre = '';
      this.errors.apellido = '';
      this.errors.direccion = '';
      this.errors.email = '';
      this.errors.password = '';
    }
  }
}
