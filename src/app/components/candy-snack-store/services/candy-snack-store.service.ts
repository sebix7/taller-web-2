import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, share } from 'rxjs';
import { Store } from '../store';

@Injectable({
  providedIn: 'root'
})
export class CandySnackStoreService {

  productos:Store[] =[];
  Store: any;
  pochoclos:Store[]=[];
  nachos:Store[]=[];
  otrosSnacks:Store[]=[];
  bebidas:Store[]=[];
  candies:Store[]=[];
  combos:Store[]=[];

  constructor(protected router: Router, protected httpClient: HttpClient) { 

    let res: Observable<Store[]> = this.httpClient
    .get<Store[]>('http://localhost:3000/store')
    .pipe(share());

    res.subscribe(
      (value) => {
        this.Store = value;
        this.productos = this.Store;
        this.productos.find((prod)=>{
          this.productos.push(prod);
            switch(prod.categoria){
              case 'combo':
                this.combos.push(prod);
              break;
              case 'pochoclo':
                this.pochoclos.push(prod);
              break;
              case 'snack-nachos':
                this.nachos.push(prod);
              break;
              case 'snack':
                this.otrosSnacks.push(prod);
              break;
              case 'bebida':
                this.bebidas.push(prod);
              break;
              case 'candy':
                this.candies.push(prod);
              break;
            }
        })
        
      },
      (error) => {
        console.log('ocurrio un error');
      }
    );
  }

  agregarProductos(){
    
  }
  modificarProductos(){
    
  }

  eliminarProductos(){
    
  }
}
