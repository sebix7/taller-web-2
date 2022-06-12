import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-reserva',
  templateUrl: './historial-reserva.component.html',
  styleUrls: ['./historial-reserva.component.css']
})
export class HistorialReservaComponent implements OnInit {

  mensaje:string="d-none";
  tabla:string="d-block";

  constructor() { }

  ngOnInit(): void {
  }

  cancelarReserva(){
      this.mensaje="d-block";
      this.tabla="d-none";
  }

}
