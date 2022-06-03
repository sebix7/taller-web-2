import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../lista-de-peliculas/pelicula';

@Component({
  selector: 'app-funciones',
  templateUrl: './funciones.component.html',
  styleUrls: ['./funciones.component.css'],
})
export class FuncionesComponent implements OnInit {
  peliculas: Pelicula[] = [
    {
      id: 1,
      titulo: 'Sonic',
      imagen: './assets/img/peliculas/sonic.jpg',
      descripcion:
        'En esta película, Sonic se une al alguacil local de un pueblo, Tom Wachowski, para escapar de fuerzas gubernamentales secretas y derrotar a Robotnik, quien quiere robar los poderes de Sonic usando sus armas robot sumamente avanzadas para capturarlo.',
      genero: 'Aventura',
      duracion: '120 MIN',
      actores: 'Luisito',
      director: 'Juan Riquelme',
    },
    {
      id: 2,
      titulo: 'Joker',
      imagen: './assets/img/peliculas/joker.jpg',
      descripcion:
        'Joker mostrará por primera vez los orígenes del icónico archienemigo por excelencia de Bruce Wayne/Batman. La historia sigue de cerca la vida de Arthur Fleck (Joaquin Phoenix), un hombre con problemas psiquiátricos que vivirá una serie de acontecimientos que le harán convertirse en uno de los grandes villanos de DC Comics. El Príncipe Payaso del Crimen se cruzará en el camino de Thomas Wayne (Brett Cullen) y se acercará a su hijo, el futuro Caballero Oscuro en su versión joven (Dante Pereira-Olson).',
      genero: 'Drama',
      duracion: '2h 02 MIN',
      actores: 'Joaquin Phoenix, Robert De Niro, Zazie Beetz',
      director: 'Todd Phillips',
    },
    {
      id: 3,
      titulo: 'Gremlins',
      imagen: './assets/img/peliculas/gremlins.jpg',
      descripcion:
        'El joven Billy Peltzer (Zach Galligan) recibe un regalo bastante inusual por Navidad. Su padre, un despistado inventor, le compra una extraña mascota cuyo nombre es Mogwai. A pesar de su aspecto bondadoso y achuchable, hay que tener un especial cuidado con la mascota. Es importante que no entre en contacto con el agua y, sobre todo, que no coma después de las doce de la noche. Pero por un descuido, Mogwai se moja y de él salen varios compañeros iguales que él, claro que esta vez son un poco perversos. Esta pandilla de gamberras criaturas harán todo lo posible por comer pasada la media noche.',
      genero: 'Fantasía/Comedia',
      duracion: '1h 45 MIN',
      actores: 'Zach Galligan, Phoebe Cates, Hoyt Axton',
      director: 'Joe Dante',
    },
    {
      id: 4,
      titulo: 'Et',
      imagen: './assets/img/peliculas/et.jpg',
      descripcion:
        'Un grupo de extraterrestres, que vienen en son de paz, están realizando una expedición en nuestro planeta. Cuando deciden marcharse, uno de ellos no llega a tiempo a la nave y lo dejan olvidado en la Tierra.A las afueras de una ciudad de California vive Elliot, un chico tímido y solitario. Una noche escucha un ruido en su jardín y decide salir a ver qué ha provocado el sonido. Su sorpresa es mayúscula cuando se topa con este extraño ser, pero al poco tiempo se da cuenta que es inofensivo y que también está asustado. El joven le pone el nombre de E.T. y decide ayudarlo cobijándolo a su casa.',
      genero: 'Ciencia ficción/Familia/Aventura',
      duracion: '2h 00 MIN',
      actores: 'Henry Thomas, Drew Barrymore, Dee Wallace',
      director: 'Steven Spielberg',
    },
    {
      id: 5,
      titulo: 'Harry Potter',
      imagen: './assets/img/peliculas/harry-potter.jpg',
      descripcion:
        'Harry Potter es un niño huérfano criado por su tío Vernon y su tía Petunia que lo odian. Desde que era pequeño, estos siempre le han contado que sus padres murieron en un accidente de coche.El día de su decimoprimer cumpleaños, Harry recibe la inesperada visita de un hombre gigantesco de nombre Rubeus Hagrid. Este le revela que es, de hecho, hijo de dos poderosos magos y que él también posee extraordinarios poderes.Lleno de alegría, el chico acepta ir a estudiar a Hogwarts, el famoso colegio de magia y hechicería. Por fin, tiene la oportunidad de hacer amigos. Odiado por Severus Snape, profesor de Pociones, y protegido por Albus Dumbledore, director del colegio, Harry intentará dilucidar el misterio de la piedra filosofal.',
      genero: 'Fantasía/Aventura/Familia',
      duracion: '2h 32min',
      actores: 'Daniel Radcliffe, Rupert Grint, Emma Watson',
      director: 'Chris Columbus',
    },
    {
      id: 6,
      titulo: 'Animales Fantasticos 3',
      imagen: './assets/img/peliculas/animales-fantasticos.jpg',
      descripcion:
        'En Animales Fantásticos: Los Secretos de Dumbledore el malvado y poderoso mago Grindelwald sigue buscando adeptos a su causa, pero esta vez se transportará a todos los rincones y mundos mágicos existentes para obtener lo que quiere. Por otra parte, Dumbledore unirá a su propio ejército formado por Newt y Theseus Scamander, Jacob, entre otros, para poner fin a la guerra que está a punto de comenzar Grindelwald en su nombre. ',
      genero: 'Fantasía/Aventura',
      duracion: '2h 22 MIN',
      actores: 'Eddie Redmayne, Jude Law, Mads Mikkelsen',
      director: 'David Yates',
    },
    {
      id: 7,
      titulo: 'Doctor Strange',
      imagen: './assets/img/peliculas/doctor-strange.jpg',
      descripcion:
        'En esta nueva aventura, el Doctor Strange (Benedict Cumberbatch) va a poner a prueba los límites de sus poderes y esto le llevará a explorar una nueva dimensión de sus capacidades. Tras haber fallado su hechizo, cuando trataba de ayudar a Spider-Man (Tom Holland) con su identidad secreta,  tiene que recurrir a una vieja amiga, Wanda Maximoff (Elizabeth Olsen) para enmendar su error. Como nunca antes, el famoso hechicero de Marvel explorará los oscuros rincones del Multiverso, donde deberá contar con nuevos y viejos aliados si quiere sobrevivir a las peligrosas realidades alternativas del universo y enfrentarse a un nuevo misterioso enemigo.',
      genero: 'Fantasía/Acción/Aventura',
      duracion: '2h 06 MIN',
      actores: 'Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor',
      director: 'Sam Raimi',
    },
    {
      id: 8,
      titulo: 'Jurassic World Dominion',
      imagen: './assets/img/peliculas/jurassic-world-dominion.jpg',
      descripcion:
        'Esta nueva entrega transcurre cuatro años después de la destrucción de Isla Nublar vista en Jurassic World: El reino caído. Ahora, los dinosaurios conviven con los seres humanos en todo el mundo. Este frágil equilibrio cambiará el futuro y decidirá, de una vez por todas, si las personas seguirán siendo los principales depredadores en un planeta que comparten con los animales más temibles de la creación. Owen Grady (Chris Pratt), el experto en rapaces, regresa en una nueva aventura junto a Claire Dearing (Bryce Dallas Howard), la guía del parque. Esta tercera entrega de la saga Jurassic World, basada en los libros de Michael Crichton, la produce Steven Spielberg (Ready Player One, Los archivos del Pentágono).',
      genero: ' Acción/Aventura/Ciencia ficción',
      duracion: '2h 26 MIN',
      actores: 'Chris Pratt, Bryce Dallas Howard, Jeff Goldblum',
      director: 'Colin Trevorrow',
    },
    {
      id: 9,
      titulo: 'Lightyear',
      imagen: './assets/img/peliculas/lightyear.jpg',
      descripcion:
        'La película cuenta los orígenes de Buzz Lightyear, el héroe que inspiró el juguete, y nos da a conocer la historia de este legendario Guardián Espacial narrada como una apasionante aventura intergaláctica.',
      genero: 'Animación/Aventura/Comedia',
      duracion: '1h 40 MIN',
      actores: 'Chris Evans, Keke Palmer, Dale Soules',
      director: 'Angus MacLane',
    },
    {
      id: 10,
      titulo: 'Avatar',
      imagen: './assets/img/peliculas/avatar.jpg',
      descripcion:
        "Varios años después de los sucesos ocurridos en Avatar (2009), volvemos a Pandora donde Jake Sully (Sam Worthington) y Neytiri (Zoe Saldana) han formado una familia. La pareja formada por el ex-humano amigo de los Na'vi y la hija del anterior jefe del clan, además de sus hijos, viajarán más allá de los bosques de Pandora a entornos subacuáticos y volcánicos. Después de revolucionar el 3D con Avatar (2009), James Cameron (Titanic, Abyss) vuelve a ponerse al frente de este proyecto que dirige, escribe y produce.",
      genero: 'Ciencia ficción/Aventura',
      duracion: '2h 42 MIN',
      actores: 'Sam Worthington, Zoe Saldana, Sigourney Weaver',
      director: 'James Cameron',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
