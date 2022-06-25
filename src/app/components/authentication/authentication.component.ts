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
  public screen: string;
  public formRegistro: any;
  public formLogin: any;
  public formConfirmacion: any;
  public errors: any;
  public errorsLogin: any;
  public email: string;

  constructor(
    protected router: Router,
    private formBuilder: FormBuilder,
    protected httpClient: HttpClient
  ) {
    this.screen = 'login';
    this.formLogin = FormGroup;
    this.formRegistro = FormGroup;
    this.formConfirmacion = FormGroup;
    this.errors = {
      nombre: '',
      apellido: '',
      direccion: '',
      email: '',
      password: '',
      registro: '',
    };
    this.errorsLogin = {
      usuarioIncorrecto: '',
      usuarioNoConfirmado: '',
    };
    this.email = '';
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
        Validators.minLength(8),
        Validators.required,
        Validators.pattern(
          '(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$@$ñ<>!%*?&]).{8,}'
        ),
      ]),
    });

    this.formConfirmacion = this.formBuilder.group({
      codigo: new FormControl('', [Validators.required]),
    });
  }

  changeScreen(screen: string, email?: string) {
    this.screen = screen;

    if (!!email) {
      this.email = email;
    } else {
      this.email = '';
    }
  }

  login(): any {
    const body = this.formLogin.value;

    let res: Observable<Response[]> = this.httpClient
      .post<Response[]>(`http://localhost:3000/auth/login`, body)
      .pipe(share());

    res.subscribe(
      (value) => {
        // console.log(value);
        this.errorsLogin.usuarioIncorrecto = '';
        this.router.navigate(['/']);

        // Swal.fire('Login exitoso', '', 'success');
      },
      (error) => {
        if (error.ok === false) {
          if (error.error.err.name === 'UserNotConfirmedException') {
            this.changeScreen('validar', this.formLogin.value.email);
            this.errorsLogin.usuarioIncorrecto = '';
          } else {
            this.errorsLogin.usuarioIncorrecto =
              'Usuario / Password incorrecto';
            // console.log(this.errorsLogin.usuarioIncorrecto);
          }
        }
      }
    );
  }

  confirmar(): any {
    const body = { codigo: this.formConfirmacion.value, email: this.email };
    let res: Observable<Response[]> = this.httpClient
      .post<Response[]>(`http://localhost:3000/auth/validar`, body)
      .pipe(share());

    res.subscribe(
      (value) => {
        this.errorsLogin.usuarioNoConfirmado = '';
        Swal.fire('Usuario confirmado', '', 'success');
      },
      (error) => {
        this.errorsLogin.usuarioNoConfirmado = 'Código incorrecto';
      }
    );
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
            'La contraseña debe tener mínimo 8, caracteres una letra mayúscula, una minúscula, un número y un carácter especial')
        : (this.errors.password = '');
    } else {
      const body = this.formRegistro.value;

      let res: Observable<Response[]> = this.httpClient
        .post<Response[]>(`http://localhost:3000/auth`, body)
        .pipe(share());

      res.subscribe(
        () => {
          Swal.fire('Registro exitoso', '', 'success');
        },
        () => {
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
