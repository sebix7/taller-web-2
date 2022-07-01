import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, share } from 'rxjs';
import { Store } from './store';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-candy-snack-store',
  templateUrl: './candy-snack-store.component.html',
  styleUrls: ['./candy-snack-store.component.css'],
})
export class CandySnackStoreComponent implements OnInit {
  Store: any;
  productos: Store[] = [];
  items: Store[] = [];

  constructor(protected router: Router, protected httpClient: HttpClient) {}

  ngOnInit(): void {
    //SE TRAEN TODOS LOS PRODUCTOS DEL BACK
    let res: Observable<Store[]> = this.httpClient
      .get<Store[]>('http://localhost:3000/store')
      .pipe(share());
    res.subscribe(
      (value) => {
        this.Store = value;
        this.productos = this.Store.productos;
      },
      (error) => {
        Swal.fire('Ocurrió un error', '', 'error');
      }
    );
  }

  //AGREGO AL CARRITO LOS PRODUCTOS.
  agregarAlCarrito(producto: any): void {
    if (localStorage.getItem('ProductoCarrito') == null) {
      //SI EL CARRITO ESTA VACIO
      localStorage.setItem('ProductoCarrito', JSON.stringify(this.items)); //LE SETEO UNA LISTA VACIA.
    } else {
      //SI EL CARRITO TIENE CONTENIDO
      this.items = JSON.parse(localStorage.getItem('ProductoCarrito') || '{}'); //LE AGREGO A UN ARRAY LO QUE TIENE EL CARRITO
      this.items.push(producto); //PUSHEO UN NUEVO PRODUCTO
      localStorage.setItem('ProductoCarrito', JSON.stringify(this.items)); //Y LO VUELVO A GUARDAR
    }
    this.router.navigate(['/carrito']); //ME REDIRIGE AL CARRITO
  }
}
