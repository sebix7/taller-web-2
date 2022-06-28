import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, share } from 'rxjs';
import { Store } from './store';

@Component({
  selector: 'app-candy-snack-store',
  templateUrl: './candy-snack-store.component.html',
  styleUrls: ['./candy-snack-store.component.css']
})
export class CandySnackStoreComponent implements OnInit {

  Store: any;
  productos:Store[]=[];
  items:Store[]=[];
  
  constructor(protected router: Router, protected httpClient: HttpClient) { 

  }


  ngOnInit(): void {
    let res: Observable<Store[]> = this.httpClient
    .get<Store[]>('http://localhost:3000/store')
    .pipe(share());
    res.subscribe(
      (value) => {
        this.Store = value;
        this.productos = this.Store.productos;
      },
      (error) => {
        console.log('ocurrio un error');
      }
    );
  }

  agregarAlCarrito(producto: any): void{
 
    if(localStorage.getItem("ProductoCarrito") == null){
      localStorage.setItem("ProductoCarrito", JSON.stringify(this.items));
    }
    else{
      this.items = JSON.parse(localStorage.getItem('ProductoCarrito') || '{}');
      this.items.push(producto);
      localStorage.setItem("ProductoCarrito", JSON.stringify(this.items));

    }
    this.router.navigate(['/carrito']);

  }

}
