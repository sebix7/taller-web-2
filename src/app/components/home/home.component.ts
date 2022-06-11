
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, JsonpClientBackend } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { share, catchError } from 'rxjs/operators';
import { Pelicula } from '../home/pelicula';
declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peliculas: Pelicula[] = [];
  Peliculas: any;
  
  images: string[] = [
    'https://cdn.pixabay.com/photo/2016/01/22/08/17/banner-1155437_960_720.png',
    'https://blogdesuperheroes.es/TDK/BDS_TDK_Banner3.jpg',
    'https://i.pinimg.com/originals/5b/69/f9/5b69f9626d1b8618da6281b5e8cf65c8.jpg'
  ];


  constructor(protected router: Router, protected httpClient: HttpClient) {

  }
  
  ngOnInit(): void {

    $.getScript('assets/js/custom.js');

    let res: Observable<Pelicula[]> =
     this.httpClient.get<Pelicula[]>('http://localhost:3000/')
     .pipe(share());

     res.subscribe( 

      value => { 
        console.log(value)
         this.Peliculas = value;
         this.peliculas = this.Peliculas;

      },
      error => {
        console.log('ocurrio un error');
      });


  }

}
