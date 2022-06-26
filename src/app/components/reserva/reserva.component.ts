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
  columna: any[] = [];
  reserva:Reserva={
    id:0,
    pelicula:'',
    asiento:'',
    fechaFuncion:'',
    candySnack:''
  }

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
        this.Peliculas = value;
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

    console.log(this.reservas)
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

  guardarReserva(reserva:Reserva): Observable<any>{
      let url='http://localhost:3000/reserva';
      return this.httpClient.post(url,reserva);
  }

  generarId(){
    let idGenerado=1;
    if(this.reservas.length!=0){

      this.reservas.filter((reserva)=>{
        idGenerado=Math.max(reserva.id)+1;
     });

    }
    
    return idGenerado;
    
  }
  
  reservarCol(columna: string, numero: number){
    this.columna.push(columna+''+(numero+1));
    console.log(this.columna);
  }
  reservar(){

    if(this.columna.length > 0){
    this.columna.forEach(col => {

      this.reserva.id=this.generarId();
      this.reserva.pelicula=this.titulo;
      this.reserva.asiento=this.columna.toString().replace(',',' ');
      this.reserva.fechaFuncion=this.funcionDia+" "+this.funcionHorario;
      this.reserva.candySnack="-";

      this.reservas.push(this.reserva);
      
      this.guardarReserva(this.reserva).subscribe(data=>{
        console.log(data, "se guardooo");
      },error=> console.log(error))

    });

      if(localStorage.getItem("reservas") != null && localStorage.getItem("reservas") != ""){
        let localReservas: any[] = JSON.parse(localStorage.getItem('reservas') || '{}');
        this.reservas.forEach((res) => {
          localReservas.push(res);
        })
        localStorage.setItem("reservas", JSON.stringify(localReservas));
        console.log(localReservas);
        this.reservas = [];
      } else {
        localStorage.setItem("reservas", JSON.stringify(this.reservas));
        this.reservas = [];
      }

      console.log(this.reserva)
       
      this.router.navigate(["/carrito"]);
    };

}
}
