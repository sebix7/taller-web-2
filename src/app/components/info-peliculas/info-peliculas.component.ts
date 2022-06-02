import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-peliculas',
  templateUrl: './info-peliculas.component.html',
  styleUrls: ['./info-peliculas.component.css']
})
export class InfoPeliculasComponent implements OnInit {

  tituloPelicula: string = "Sonic";
  id: number = 1;
  imagen: string = "./assets/img/peliculas/sonic.jpg"
  descripcion: string = "En esta película, Sonic se une al alguacil local de un pueblo, Tom Wachowski, para escapar de fuerzas gubernamentales secretas y derrotar a Robotnik, quien quiere robar los poderes de Sonic usando sus armas robot sumamente avanzadas para capturarlo."
  trailer: string = 'MsaAnA2EZQg';

  ngOnInit(): void {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
