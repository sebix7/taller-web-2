import {
  HttpClient
} from '@angular/common/http';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  Observable,
  share
} from 'rxjs';
import {
  Reserva
} from './reserva';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  items: any[] = [];
  itemProductos: any[] = [];
  precioTotal: number = 0;

  Reservas: Reserva[] = []; //el carrito puede contener mas de una reserva
  reserva: Reserva = {
    id: 0,
    usuario: '',
    pelicula: '',
    asiento: '',
    fechaFuncion: '',
    candySnack: '',
    precio: 500
  };

  constructor(private router: Router, protected httpClient: HttpClient) {}

  ngOnInit(): void {
    if (localStorage.getItem("reservas") != null && localStorage.getItem("reservas") != "") {
      this.items = JSON.parse(localStorage.getItem('reservas') || '{}');
      console.log(this.items)
    }
    if (localStorage.getItem("ProductoCarrito") != null && localStorage.getItem("ProductoCarrito") != "") {
      this.itemProductos = JSON.parse(localStorage.getItem('ProductoCarrito') || '{}');
    }
    this.calcularTotal();
  }

  finCompra() {
    console.log(localStorage.getItem("IdUser"))
    if(localStorage.getItem("IdUser") === null ){

      alert('Debes estar logueado - Se re redigira al login')
      this.router.navigate(['/login']);

    }else{

      for (let index = 0; index < this.items.length; index++) {
        const element = this.items[index];
  
        this.reserva.id = 0;
        this.reserva.usuario = localStorage.getItem('IdUser');
        this.reserva.fechaFuncion = element.fechaFuncion;
        this.reserva.pelicula = element.pelicula;
        this.reserva.precio = 500;
        this.reserva.asiento = element.asiento;
        this.reserva.candySnack = "-";
  
        this.Reservas.push(this.reserva);
      }
  
      const body = this.Reservas
  
      let res: Observable < Response[] > = this.httpClient
        .post < Response[] > (`http://localhost:3000/reserva/`,body)
        .pipe(share());
  
      res.subscribe(
        (value) => {
  
          this.router.navigate(['/']);
  
        },
        (error) => {
          alert('nada de nada')
        }
      )
      this.liberarInformacion();

    }
    
    

  }

  liberarInformacion() {
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

  quitarItemProducto(i: number) {
    this.itemProductos.splice(i, 1)
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
