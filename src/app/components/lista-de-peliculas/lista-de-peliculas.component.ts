import { Component, OnInit } from '@angular/core';
import { Pelicula } from './pelicula';

@Component({
  selector:'app-peliculas', 
  templateUrl: './lista-de-peliculas.component.html',
  styleUrls: ['./lista-de-peliculas.component.css']
})


export class ListaDePeliculasComponent implements OnInit {

  peliculas: Pelicula[] = [];
  descripcion:string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.";

  constructor() { }

  ngOnInit(): void {

    this.peliculas=[
      {
        id:1,
        titulo: "Sonic",
        imagen:"./assets/img/peliculas/sonic.jpg",
        descripcion:"Va a los chapazos"
      },
      {
        id:2,
        titulo: "Joker",
        imagen:"./assets/img/peliculas/joker.jpg",
        descripcion:this.descripcion
      },
      {
        id:3,
        titulo: "Gremlins",
        imagen:"./assets/img/peliculas/gremlins.jpg",
        descripcion:this.descripcion
      },
      {
        id:4,
        titulo: "Et",
        imagen:"./assets/img/peliculas/et.jpg",
        descripcion:this.descripcion
      },
      {
        id:5,
        titulo: "Harry Potter",
        imagen:"./assets/img/peliculas/harry-potter.jpg",
        descripcion:this.descripcion
      },
      {
        id:6,
        titulo: "Animales Fantasticos 3",
        imagen:"./assets/img/peliculas/animales-fantasticos.jpg",
        descripcion:this.descripcion
      },
      {
        id:7,
        titulo: "Doctor Strange",
        imagen:"./assets/img/peliculas/doctor-strange.jpg",
        descripcion:this.descripcion
      },
      {
        id:8,
        titulo: "Jurassic World Dominion",
        imagen:"./assets/img/peliculas/jurassic-world-dominion.jpg",
        descripcion:this.descripcion
      },
      {
        id:9,
        titulo: "Lightyear",
        imagen:"./assets/img/peliculas/lightyear.jpg",
        descripcion:this.descripcion
      },
      {
        id:10,
        titulo: "Avatar",
        imagen:"./assets/img/peliculas/avatar.jpg",
        descripcion:this.descripcion
      }
    ]
  }

  getPeliculas(){
    return this.peliculas;
  }
}
