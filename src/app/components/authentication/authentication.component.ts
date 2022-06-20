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

  constructor(
    protected router: Router,
    private formBuilder: FormBuilder,
    protected httpClient: HttpClient
  ) {
    this.screen = 1;
    this.formLogin = FormGroup;
    this.formRegistro = FormGroup;
    this.errors = { email: '', password: '' };
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
        Validators.minLength(6),
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
      this.formRegistro.controls.email.invalid === true ||
      this.formRegistro.controls.password.invalid === true
    ) {
      this.formRegistro.controls.email.invalid === true
        ? (this.errors.email = 'Ingrese un email valido')
        : (this.errors.email = '');

      this.formRegistro.controls.password.invalid === true
        ? (this.errors.password =
            'La contraseña debe tener más de 6 caracteres')
        : (this.errors.password = '');
    } else {
      const body = this.formRegistro.value;

      let res: Observable<Response[]> = this.httpClient
        .post<Response[]>(`http://localhost:3000/auth`, {
          body,
        })
        .pipe(share());

      res.subscribe(
        (value) => {
          console.log(value);
        },
        (error) => {
          console.log(error);
        }
      );

      this.errors.email = '';
      this.errors.password = '';
    }
  }

  // registrar(){
  //   console.log('nombreUsuario:' + this.formRegistro.get('nombreUsuario').value);
  //   this.datosRegistro.nombreDeUsuario = this.formRegistro.get('nombreUsuario').value;
  //   this.datosRegistro.nombreDeUsuario = this.formRegistro.get('nombreUsuario').value;
  //   this.datosRegistro.nombreDeUsuario = this.formRegistro.get('nombreUsuario').value;
  //   this.datosRegistro.nombreDeUsuario = this.formRegistro.get('nombreUsuario').value;

  //   this.cognitoReg(this.datosRegistro)
  // }

  // cognitoReg(datosRegistro: datosDeRegistro) {

  //   let res: Observable<datosDeRegistro[]> =
  //    this.httpClient.post<datosDeRegistro[]>('http://localhost:3002/registro', datosRegistro)
  //    .pipe(share());

  //    res.subscribe(

  //     value => {
  //       console.log(value)
  //     },
  //     error => {
  //       console.log('ocurrio un error');
  //     });

  // }
}
