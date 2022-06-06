import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: string[] = [
    'https://cdn.pixabay.com/photo/2016/01/22/08/17/banner-1155437_960_720.png',
    'https://blogdesuperheroes.es/TDK/BDS_TDK_Banner3.jpg',
    'https://i.pinimg.com/originals/5b/69/f9/5b69f9626d1b8618da6281b5e8cf65c8.jpg'
  ];

  peliculas: any[] = [
    { 'img': 'assets/img/peliculas/animales-fantasticos.jpg', 'titulo': 'Animales Fantásticos', 'estreno': true },
    { 'img': 'assets/img/peliculas/avatar.jpg', 'titulo': 'Avatar', 'estreno': false },
    { 'img': 'assets/img/peliculas/doctor-strange.jpg', 'titulo': 'Doctor strange', 'estreno': true },
    { 'img': 'assets/img/peliculas/et.jpg', 'titulo': 'E.T.', 'estreno': false },
    { 'img': 'assets/img/peliculas/gremlins.jpg', 'titulo': 'Gremlins', 'estreno': false },
    { 'img': 'assets/img/peliculas/harry-potter.jpg', 'titulo': 'Harry Potter', 'estreno': false },
    { 'img': 'assets/img/peliculas/joker.jpg', 'titulo': 'Joker', 'estreno': true },
    { 'img': 'assets/img/peliculas/jurassic-world-dominion.jpg', 'titulo': 'Jurassic World: Dominion', 'estreno': false },
    { 'img': 'assets/img/peliculas/lightyear.jpg', 'titulo': 'Lightyear', 'estreno': true },
    { 'img': 'assets/img/peliculas/sonic.jpg', 'titulo': 'Sonic', 'estreno': false }
  ]

  estrenos: any[] = [];
  anticipadas: any[] = [];

  constructor() { }
  
  
  ngOnInit(): void {
    $.getScript('assets/js/custom.js');
    this.peliculas.forEach(pelicula => {
      if(pelicula.estreno == true) this.estrenos.push(pelicula);
      else this.anticipadas.push(pelicula);
    })
  }

}
