import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-peliculas',
  templateUrl: './info-peliculas.component.html',
  styleUrls: ['./info-peliculas.component.css']
})
export class InfoPeliculasComponent implements OnInit {

  titulo: any = ""
  imagen: any = ""
  descripcion: any = ""
  genero:any=""
  duracion:any=""
  actores:any=""
  director:any=""
  trailer: string = 'MsaAnA2EZQg';
  
  constructor() {

        this.titulo= localStorage.getItem("titulo");
        this.imagen = localStorage.getItem("imagen");
        this.descripcion=localStorage.getItem("descripcion");
        this.genero=localStorage.getItem("genero");
        this.duracion=localStorage.getItem("duracion");
        this.actores=localStorage.getItem("actores");
        this.director=localStorage.getItem("director");
  }

  ngOnInit(): void {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
