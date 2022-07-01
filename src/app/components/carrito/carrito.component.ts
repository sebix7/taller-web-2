import { Component, OnInit } from '@angular/core';
import { Observable, share } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Reserva } from '../reserva/historial-reserva/historial-reserva';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  items: any[] = [];
  itemProductos:any[]=[];
  precioTotal: number = 0;
  reserva:Reserva={
    id: 0,
    usuario:'',
    pelicula: '',
    asiento: '',
    fechaFuncion: '',
    candySnack: '',
    precio: 500
  }

  constructor(private router: Router,protected httpClient: HttpClient) { }

  ngOnInit(): void {
    if(localStorage.getItem("reservas") != null && localStorage.getItem("reservas") != ""){
      this.items = JSON.parse(localStorage.getItem('reservas') || '{}');
      console.log(this.items)
    }
    if(localStorage.getItem("ProductoCarrito") != null && localStorage.getItem("ProductoCarrito") != ""){
      this.itemProductos = JSON.parse(localStorage.getItem('ProductoCarrito') || '{}');
    }
    this.calcularTotal();
  }

  guardarReserva(reserva:Reserva): Observable<any>{
    let url='http://localhost:3000/reserva';
    return this.httpClient.post(url,reserva);
}

  finCompra() {
    console.log(this.itemProductos)
    /*this.items.forEach((reser)=>{
        this.itemProductos.forEach((prod)=>{
            this.reserva.id=reser.id;
            this.reserva.pelicula=reser.pelicula;
            this.reserva.asiento=reser.asiento;
            this.reserva.fechaFuncion=reser.fechaFuncion;
            if(prod){
              this.reserva.candySnack=this.itemProductos.toString().replace(",","\n");
            }else{
              this.reserva.candySnack="-";
            }
            this.reserva.usuario=reser.usuario;
            this.guardarReserva(this.reserva).subscribe(data=>{
              console.log(data, "se guardooo");
            },error=> console.log(error))
        })
    });*/

    localStorage.removeItem("reservas");
    localStorage.removeItem("ProductoCarrito");
    this.precioTotal = 0;
    alert("¡Gracias por su Compra!");
    this.router.navigate(["/"]);
  }

  quitarItemFuncion(i: number) {
    this.items.splice(i, 1);
    localStorage.setItem("reservas", JSON.stringify(this.items));
    this.precioTotal = 0;
    this.calcularTotal();
  }

  quitarItemProducto(i: number){
    this.itemProductos.splice(i,1)
    localStorage.setItem("ProductoCarrito", JSON.stringify(this.itemProductos));
    this.precioTotal = 0;
    this.calcularTotal();
  }

  calcularTotal() {
    for (let index = 0; index < this.items.length; index++) {
        this.precioTotal += this.items[index].precio;
    }

    for (let index = 0; index < this.itemProductos.length; index++) {
      this.precioTotal += this.itemProductos[index].precio;
  }
  }

}
