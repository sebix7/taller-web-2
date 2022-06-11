import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, share } from 'rxjs';
import { Funcion } from './Funcion';

@Component({
  selector: 'app-funciones',

  templateUrl: './funciones.component.html',
  styleUrls: ['./funciones.component.css']
})
export class FuncionesComponent implements OnInit {

  titulo:any;
  idPelicula:any;

  Funciones: any;

  funciones: Funcion[] = []
  

  constructor(protected router: Router, protected httpClient: HttpClient,protected route: ActivatedRoute) {

  }  

  ngOnInit(): void {
  
     this.titulo =  this.route.snapshot.paramMap.get("titulo");
     this.idPelicula =  this.route.snapshot.paramMap.get("idPeli");

     let res: Observable<Funcion[]> =
     this.httpClient.get<Funcion[]>(`http://localhost:3002/${this.idPelicula}`)//me tre las funciones de una peli
     .pipe(share());

     res.subscribe( 

      value => { 
        console.log(value)
         this.Funciones = value;
         this.funciones = this.Funciones;

      },
      error => {
        console.log('ocurrio un error');
      });
  }

}
