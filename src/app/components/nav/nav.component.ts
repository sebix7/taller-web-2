import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, share } from 'rxjs';
import { Pelicula } from '../home/pelicula';
import { HttpClient, HttpHeaders, HttpErrorResponse, JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  buscador: boolean = false;
  formBusqueda: FormGroup;
  peliculaBuscada:string ="";
  
  peliculas: Pelicula[] = []
  Peliculas: any;

  constructor(protected router:Router, private formBuilder: FormBuilder, protected httpClient: HttpClient) {
    this.formBusqueda = this.formBuilder.group({
      titulo: new FormControl('',  Validators.required),
    });
  }

  ngOnInit(): void {
    let res: Observable<Pelicula[]> =
    this.httpClient.get<Pelicula[]>('http://localhost:3000/')
    .pipe(share());

    res.subscribe( 

     value => { 
        this.Peliculas = value;
        this.peliculas = this.Peliculas;
     },
     error => {
       console.log('ocurrio un error');
     });

  }
  
  onSubmit(){
   //var getPelicula=this.peliculas.find(peli=>peli.titulo==this.peliculaBuscada);
    //if(getPelicula){
      //this.router.navigate(['/info/'+getPelicula?.id]);
      // this.router.navigate(['/info/'+this.peliculaBuscada]);
    //}
  }

  mostrarBusqueda() {
    this.peliculas.forEach(pelicula => {
      if(pelicula.titulo.toLowerCase().includes(this.formBusqueda.controls['titulo'].value.toLowerCase())) {
        this.router.navigate(['/info/'+pelicula.id]);
        this.buscador = false;
      }
    });
  }

}
