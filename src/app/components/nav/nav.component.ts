import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListaDePeliculasComponent } from '../lista-de-peliculas/lista-de-peliculas.component';

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
    this.lista.peliculas.forEach(pelicula => {
      if(pelicula.titulo.toLowerCase().includes(this.formBusqueda.controls['titulo'].value.toLowerCase())) {
        this.router.navigate(['/info/'+pelicula.id]);
        this.buscador = false;
        localStorage.setItem("titulo",pelicula.titulo);
        localStorage.setItem("descripcion",pelicula.descripcion)
        localStorage.setItem("imagen",pelicula.imagen);
        localStorage.setItem("genero",pelicula.genero);
        localStorage.setItem("duracion",pelicula.duracion);
        localStorage.setItem("actores",pelicula.actores);
        localStorage.setItem("director",pelicula.director);
      }
    });
  }

}
