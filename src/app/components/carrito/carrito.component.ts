import {HttpClient} from '@angular/common/http';
import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable,share} from 'rxjs';
import {Reserva} from './reserva';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  ReservasAlBack: any[] = [];
  Productos: any[] = [];
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
    //LAS RESERVAS QUE VIENEN DE LA SELECCION DE BUTACAS
    if (localStorage.getItem("reservas") != null) { //SI HAY RESERVA
      this.Reservas = JSON.parse(localStorage.getItem('reservas') || '{}'); //LAS GUARDO EN LA VARIABLE
    }

    //LOS PRODUCTOS QUE VIENEN DE LA SECCION SNACK STORE
    if (localStorage.getItem("ProductoCarrito") != null) { //SI HAY PRODUCTOS
      this.Productos = JSON.parse(localStorage.getItem('ProductoCarrito') || '{}');//LAS GUARDO EN LA VARIABLE
    }
    this.calcularTotal(); //CALCULO EL TOTAL.
  }

  finCompra() {

    //SI QUIERO FINALIZAR SIN ESTAR LOGUEADO NO ME VA A PERMITIR
    if(localStorage.getItem("IdUser") === null ){
      alert('Debes estar logueado - Se re redigira al login')
      this.router.navigate(['/login']);

    }else{

      //SI ESTA LOGUEADO:
      //
      for (let index = 0; index < this.Reservas.length; index++) {//RECORRO EL CARRITO
        const element = this.Reservas[index];
  
        //CON ESA INFORMACION CONSTRUYO UNA RESERVA - CON LA INFORMACION NECESARIA
        this.reserva.id = 0;
        this.reserva.usuario = localStorage.getItem('IdUser');
        this.reserva.fechaFuncion = element.fechaFuncion;
        this.reserva.pelicula = element.pelicula;
        this.reserva.precio = 500;
        this.reserva.asiento = element.asiento;  
        this.reserva.candySnack = "-";
  
        this.ReservasAlBack.push(this.reserva);//AGREGO ESA RESERVA A UN ARRAY QUE VA AL BACK
      }
  
      const body = this.ReservasAlBack //EL ARRAY DE RESERVAS LO ENVIO POR POST Y LAS GUARDO
  
      let res: Observable < Response[] > = this.httpClient
        .post < Response[] > (`http://localhost:3000/reserva/`,body)
        .pipe(share());
  
      res.subscribe(
        (value) => {
        },
        (error) => {
        }
      )

      this.liberarInformacion();

    }
    
    

  }
//LIBERTO LA INFORMACION DE RESERVAS Y PRODUCTOS QUE HABIA EN EL LOCALSTORAGE
  liberarInformacion() {
    localStorage.removeItem("reservas");
    localStorage.removeItem("ProductoCarrito");
    this.precioTotal = 0; //EL PRECIO TOTAL VUELVE A CERO
    alert("¡Gracias por su Compra!");
    this.router.navigate(["/"]);

  }


  //SI QUIERE ELIMINAR ESA RESERVA.
  quitarItemFuncion(id: number) {
    this.Reservas.splice(id, 1);//ELIMINO LA RESERVA CON ESE ID
    localStorage.setItem("reservas", JSON.stringify(this.Reservas));//LO VUELVO A GUARDAR
    this.precioTotal = 0;
    this.calcularTotal();//VUELVO A CALCULAR PRECIO
  }

  //LO MISMO CON LOS PRODUCTOS
  quitarItemProducto(id: number) {
    this.Productos.splice(id, 1)
    localStorage.setItem("ProductoCarrito", JSON.stringify(this.Productos));
    this.precioTotal = 0;
    this.calcularTotal();
  }

  //RECORRO LOS DOS ARRAY (RESERVAS Y PRODUCTOS PARA CALCULAR EL PRECIO)
  calcularTotal() {
    for (let index = 0; index < this.Reservas.length; index++) {
      this.precioTotal += this.Reservas[index].precio;
    }

    for (let index = 0; index < this.Productos.length; index++) {
      this.precioTotal += this.Productos[index].precio;
    }
  }



 

}
