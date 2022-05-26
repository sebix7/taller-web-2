import { Component, OnInit } from '@angular/core';

@Component({
  //selector:'app-peliculas', 
  templateUrl: './lista-de-peliculas.component.html',
  styleUrls: ['./lista-de-peliculas.component.css']
})


export class ListaDePeliculasComponent implements OnInit {

  public peliculas:Array<any> = [];
  public descripcion:string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.";

  constructor() { }

  ngOnInit(): void {

    this.peliculas=[
      {
        id:1,
        titulo: "Sony",
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
      }
    ]
  }

}
