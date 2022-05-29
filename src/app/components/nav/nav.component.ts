import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaDePeliculasComponent } from '../lista-de-peliculas/lista-de-peliculas.component';
import { Pelicula } from '../lista-de-peliculas/pelicula';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(protected router:Router) { }
  peliculaBuscada:string ="";
  lista:ListaDePeliculasComponent = new ListaDePeliculasComponent;
  peliculas:Pelicula[]= this.lista.peliculas;
  ngOnInit(): void {
  }
  
  onSubmit(){
   //var getPelicula=this.peliculas.find(peli=>peli.titulo==this.peliculaBuscada);
    //if(getPelicula){
      //this.router.navigate(['/info/'+getPelicula?.id]);
      this.router.navigate(['/info/'+this.peliculaBuscada]);
    //}
  }

}
