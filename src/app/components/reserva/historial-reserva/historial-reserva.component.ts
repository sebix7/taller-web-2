import { Component, OnInit } from '@angular/core';
import { Observable, share } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Reserva } from './historial-reserva';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historial-reserva',
  templateUrl: './historial-reserva.component.html',
  styleUrls: ['./historial-reserva.component.css'],
})
export class HistorialReservaComponent implements OnInit {
  reservas: Reserva[] = [];
  url: string;
  UserId: any;

  constructor(protected httpClient: HttpClient) {
    this.url = 'http://localhost:3000/historial-reservas';
  }

  ngOnInit(): void {
    this.getReservas();
  }

  getReservas() {
    let UserId = localStorage.getItem('IdUser');

    let res: Observable<Reserva[]> = this.httpClient
      .get<Reserva[]>(`http://localhost:3000/historial-reservas/${UserId}`)
      .pipe(share());

    res.subscribe(
      (value) => {
        this.reservas = value;
      },
      (error) => {
        Swal.fire('Ocurrió un error', '', 'error');
      }
    );
  }

  eliminarReserva(idReserva: number) {
    this.httpClient
      .delete('http://localhost:3000/historial-reservas/eliminar/' + idReserva)
      .pipe(share())
      .subscribe(
        (val) => {},
        (err) => Swal.fire('Ocurrió un error', '', 'error')
      );
    location.reload();
  }
}
