import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListaDePeliculasComponent } from '../lista-de-peliculas/lista-de-peliculas.component';
import { Pelicula } from '../lista-de-peliculas/pelicula';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  buscador: boolean = false;
  formBusqueda: FormGroup;
  peliculaBuscada:string ="";
  lista:ListaDePeliculasComponent = new ListaDePeliculasComponent;
  // peliculas:Pelicula[]= this.lista.peliculas;

  peliculas = [
    {
      id:1,
      titulo: "Sonic"
    },
    {
      id:2,
      titulo: "Joker"
    },
    {
      id:3,
      titulo: "Gremlins"
    },
    {
      id:4,
      titulo: "Et"
    },
    {
      id:5,
      titulo: "Harry Potter"
    },
    {
      id:6,
      titulo: "Animales Fantasticos 3"
    },
    {
      id:7,
      titulo: "Doctor Strange"
    },
    {
      id:8,
      titulo: "Jurassic World Dominion"
    },
    {
      id:9,
      titulo: "Lightyear"
    },
    {
      id:10,
      titulo: "Avatar El Camino del Agua"
    }
  ];

  constructor(protected router:Router, private formBuilder: FormBuilder) {
    this.formBusqueda = this.formBuilder.group({
      titulo: new FormControl('',  Validators.required),
    });
  }

  ngOnInit(): void {
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
