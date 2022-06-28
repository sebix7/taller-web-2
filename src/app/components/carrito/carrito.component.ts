import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  items: any[] = [];
  itemProductos:any[]=[];
  precioTotal: number = 0;

  constructor(private router: Router) { }

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

  finCompra() {
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
