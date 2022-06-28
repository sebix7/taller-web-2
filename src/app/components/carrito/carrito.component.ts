import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  items: any[] = [];
  precioTotal: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("reservas") != null && localStorage.getItem("reservas") != ""){
      this.items = JSON.parse(localStorage.getItem('reservas') || '{}');
      this.calcularTotal();
    }
  }

  finCompra() {
    localStorage.removeItem("reservas");
    alert("¡Gracias por su Compra!");
    this.router.navigate(["/"]);
  }

  quitarItem(i: number) {
    this.items.splice(i, 1);
    localStorage.setItem("reservas", JSON.stringify(this.items));
    this.calcularTotal();
    console.log(this.items);
  }

  calcularTotal() {
    this.precioTotal = 950 * (this.items.length);
  }

}
