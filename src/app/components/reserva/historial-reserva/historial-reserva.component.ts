import { Component, OnInit } from '@angular/core';
import { Reserva } from '../historial-reserva/historial-reserva';


@Component({
  selector: 'app-historial-reserva',
  templateUrl: './historial-reserva.component.html',
  styleUrls: ['./historial-reserva.component.css']
})
export class HistorialReservaComponent implements OnInit {

  mensaje:string="d-none";
  tabla:string="d-block";
  reservas:Reserva[]=[];
  pelicula:any;
  asiento:any;
  fechaFuncion:any;

  constructor() { }

  ngOnInit(): void {
    this.pelicula=localStorage.getItem("peliculaReservada");
    this.asiento=localStorage.getItem("asientoReservada");
    this.fechaFuncion = localStorage.getItem("fechaFuncion"); 
  }

  cancelarReserva(){
      this.mensaje="d-block";
      this.tabla="d-none";
  }

}
