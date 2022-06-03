import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
})
export class ReservaComponent implements OnInit {
  id: number;
  titulo: string;
  imagen: string;
  descripcion: string;
  genero: string;
  duracion: string;
  actores: string;
  director: string;

  constructor() {
    (this.id = 2),
      (this.titulo = 'Joker'),
      (this.imagen = './assets/img/peliculas/joker.jpg'),
      (this.descripcion =
        'Joker mostrará por primera vez los orígenes del icónico archienemigo por excelencia de Bruce Wayne/Batman. La historia sigue de cerca la vida de Arthur Fleck (Joaquin Phoenix), un hombre con problemas psiquiátricos que vivirá una serie de acontecimientos que le harán convertirse en uno de los grandes villanos de DC Comics. El Príncipe Payaso del Crimen se cruzará en el camino de Thomas Wayne (Brett Cullen) y se acercará a su hijo, el futuro Caballero Oscuro en su versión joven (Dante Pereira-Olson).'),
      (this.genero = 'Drama'),
      (this.duracion = '2h 02 MIN'),
      (this.actores = 'Joaquin Phoenix, Robert De Niro, Zazie Beetz'),
      (this.director = 'Todd Phillips');
  }

  ngOnInit(): void {}
}
