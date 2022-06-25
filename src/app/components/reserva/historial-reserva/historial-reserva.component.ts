import { Component, OnInit } from '@angular/core';
import { Reserva } from './historial-reserva';

@Component({
  selector: 'app-historial-reserva',
  templateUrl: './historial-reserva.component.html',
  styleUrls: ['./historial-reserva.component.css']
})
export class HistorialReservaComponent implements OnInit {

  mensaje:string="d-none";
  tabla:string="d-block";
  reservas:Reserva[]=[];

  constructor() {
    this.reservas =JSON.parse(localStorage.getItem('reservas') || '{}');
    console.log(this.reservas);
   }

  ngOnInit(): void {
  }

  cancelarReserva(){
      this.mensaje="d-block";
      this.tabla="d-none";
  }

}
