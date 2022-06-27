import { Component, OnInit } from '@angular/core';
import { Observable, share } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Reserva } from './historial-reserva';

@Component({
  selector: 'app-historial-reserva',
  templateUrl: './historial-reserva.component.html',
  styleUrls: ['./historial-reserva.component.css']
})
export class HistorialReservaComponent implements OnInit {

  reservas:Reserva[]=[];
  url:string;
  constructor(protected httpClient: HttpClient) {
    this.url= 'http://localhost:3000/historial-reservas'; 
   }

  ngOnInit(): void {

    this.getReservas();
    
  }

  getReservas(){
    let res: Observable<Reserva[]> = this.httpClient
    .get<Reserva[]>(this.url)
    .pipe(share());

    res.subscribe(
      (value) => {
        console.log(value);
        this.reservas = value;
      },
      (error) => {
        console.log('ocurrio un error');
      }
    );
  }

  eliminarReserva(id:number):Observable<any>{
    
    return this.httpClient.delete(this.url+'/'+id);

  }

  cancelarReserva(id:number){
      
      this.eliminarReserva(id).subscribe(data=>{
        console.log(data)
        this.getReservas();
      },error=>{
        console.log(error)
      })

      location.reload();
  }

}
