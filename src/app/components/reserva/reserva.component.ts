import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, share } from 'rxjs';
import { Pelicula } from '../home/pelicula';
import { HttpClient } from '@angular/common/http';
import { Butacas } from './butacas';
import { Router } from '@angular/router';
import { Reserva } from './historial-reserva/historial-reserva';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
})

export class ReservaComponent implements OnInit {
  id: number= 0;
  titulo: string = '';
  imagen: string = '';
  descripcion: string = '';
  genero: string = '';
  duracion: string = '';
  actores: string = '';
  director: string = '';
  pelicula!: Pelicula;
  Peliculas:any;
  idPeli:any;
  tituloPeli:any;
  funcionDia:any;
  funcionHorario:any;

  butacas: Butacas[] = [];
  Butacas: any;
  filaA: Butacas[] = [];
  filaB: Butacas[] = [];
  filaC: Butacas[] = [];
  filaD: Butacas[] = [];
  filaE: Butacas[] = [];
  filaF: Butacas[] = [];
  filaG: Butacas[] = [];
  filaH: Butacas[] = [];

  reservas:Reserva[]=[];
  //butacasReservadas:string[]=[];
  butacaReservada:string="";

  constructor(protected router: Router, protected httpClient: HttpClient,private route:ActivatedRoute) {
    this.tituloPeli = this.route.snapshot.paramMap.get('titulo');
    this.idPeli = this.route.snapshot.paramMap.get('idPeli');
    this.funcionDia = this.route.snapshot.paramMap.get('fecha');
    this.funcionHorario = this.route.snapshot.paramMap.get('horario');
    let res: Observable<Pelicula[]> = this.httpClient
      .get<Pelicula[]>(`http://localhost:3000/peliculas/${this.idPeli}`)
      .pipe(share());

    res.subscribe(
      (value) => {
        console.log(value);
        this.Peliculas = value[0];
        this.pelicula = this.Peliculas;
        this.id=this.pelicula.id;
        this.titulo = this.pelicula.titulo;
        this.imagen=this.pelicula.imagen;
        this.descripcion = this.pelicula.descripcion;
        this.genero = this.pelicula.genero;
        this.duracion=this.duracion;
        this.actores = this.pelicula.actores;
        this.director = this.pelicula.director;
      },
      (error) => {
        console.log('ocurrio un error');
      }
    );
  }

  ngOnInit(): void { 
    let res: Observable<Butacas[]> = this.httpClient
    .get<Butacas[]>('http://localhost:3000/reserva')
    .pipe(share());

  res.subscribe(
    (value) => {
      this.Butacas = value;
      this.butacas = this.Butacas;
      this.butacas.find((butaca) => {
        this.butacas.push(butaca);
        switch (butaca.fila) {
          case 'A':
            this.filaA.push(butaca);
            break;
          case 'B':
            this.filaB.push(butaca);
            break;
          case 'C':
            this.filaC.push(butaca);
            break;
          case 'D':
            this.filaD.push(butaca);
            break;
          case 'E':
            this.filaE.push(butaca);
            break;
          case 'F':
            this.filaF.push(butaca);
            break;
          case 'G':
            this.filaG.push(butaca);
            break;
          case 'H':
            this.filaH.push(butaca);
            break;
        }
      })

    },
    (error) => {
      console.log('ocurrio un error');
    }
  );
  }

  generarId(){
    let idUltimoElemento= this.reservas.pop()?.id;
    let idGenerado = 1;
    if(idUltimoElemento!=null && idUltimoElemento!=1){
      idGenerado= idUltimoElemento+1;
    }

    return idGenerado;
  }

  reservar(){    
      this.reservas.push({
        id:this.generarId(),
        pelicula:this.titulo,
        asiento:this.butacaReservada,
        fechaFuncion:this.funcionDia+" "+this.funcionHorario,
        candySnack:"-"
      });
      console.log(this.reservas)
      localStorage.setItem("peliculaReservada", this.reservas[0].pelicula);
      localStorage.setItem("asientoReservada", this.reservas[0].asiento);
      localStorage.setItem("fechaFuncion", this.reservas[0].fechaFuncion);

      //alert("Reservado con exito!");
       this.router.navigate(["/historial-reservas"]);
      //this.router.navigate([""]);

  }
}
