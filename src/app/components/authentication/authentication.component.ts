import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { datosDeRegistro } from './datosDeRegistro';
import { Observable, share } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  public screen: number;

  formRegistro: any;
  formLoguearse: any;
  
  datosRegistro: datosDeRegistro = {
    nombreDeUsuario :'',
    email: '',
    contrasenia: '',
    contraseniacopia: ''

  }

  constructor( protected router:Router, private formBuilder: FormBuilder, protected httpClient: HttpClient){
    this.screen = 1;
    this.formRegistro = FormGroup;
    this.formLoguearse = FormGroup;
  }
  


  ngOnInit(): void {
    this.formRegistro = this.formBuilder.group({
      nombreUsuario : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required, ),
      password : new FormControl('', Validators.required),
      passwordCopia : new FormControl('', Validators.required),
    });   
  }

  changeScreen() {
    this.screen = this.screen === 1 ? 2 : 1;
  }

  registrar(){
    console.log('nombreUsuario:' + this.formRegistro.get('nombreUsuario').value); 
    this.datosRegistro.nombreDeUsuario = this.formRegistro.get('nombreUsuario').value;
    this.datosRegistro.nombreDeUsuario = this.formRegistro.get('nombreUsuario').value;
    this.datosRegistro.nombreDeUsuario = this.formRegistro.get('nombreUsuario').value;
    this.datosRegistro.nombreDeUsuario = this.formRegistro.get('nombreUsuario').value;

    this.cognitoReg(this.datosRegistro)
  }

  cognitoReg(datosRegistro: datosDeRegistro) {
    
    let res: Observable<datosDeRegistro[]> =
     this.httpClient.post<datosDeRegistro[]>('http://localhost:3002/registro', datosRegistro)
     .pipe(share());

     res.subscribe( 

      value => { 
        console.log(value)
      },
      error => {
        console.log('ocurrio un error');
      });


  }

 
}
