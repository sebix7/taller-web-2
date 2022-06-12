import { Injectable } from '@angular/core';
import { Store } from '../store';

@Injectable({
  providedIn: 'root'
})
export class CandySnackStoreService {

  pochoclos:Store[]=[
    {
      id:1,
      img:"../assets/store/dulce.jpg",
      categoria:"snack",
      producto:"Pochoclo",
      descripcion:"Dulce, balde mediano",
      cantidad:0,
      precio:400
      },
    {
      id:2,
      img:"../assets/store/salado.jpg",
      categoria:"snack",
      producto:"Pochoclo",
      descripcion:"Salado, balde mediano",
      cantidad:0,
      precio:300
      },
     
      {
          id:3,
          img:"../assets/store/mixto.jpg",
          categoria:"snack",
          producto:"Pochoclo",
          descripcion:"Dulce y Salado(Mixto)",
          cantidad:0,
          precio:350
        },
        {
            id:4,
            img:"../assets/store/balde-grande.jpg",
            categoria:"snack",
            producto:"Pochoclo",
            descripcion:"Dulce/Salado, balde grande",
            cantidad:0,
            precio:1500
        }];

        nachos:Store[]=[
        {
          id:5,
          img:"../assets/store/nachos.jpg",
          categoria:"snack",
          producto:"Nachos",
          descripcion:"Sin queso/salsa",
          cantidad:0,
          precio:500
      },
      {
          id:6,
          img:"../assets/store/nachos-queso.jpg",
          categoria:"snack",
          producto:"Nachos",
          descripcion:"Con queso",
          cantidad:0,
          precio:600
      },
      {
        id:7,
        img:"../assets/store/nachos-2salsas.jpg",
        categoria:"snack",
        producto:"Nachos",
        descripcion:"Incluye 2 salsas",
        cantidad:0,
        precio:650
    },
    {
        id:8,
        img:"../assets/store/nachos-4salsas.jpg",
        categoria:"snack",
        producto:"Nachos",
        descripcion:"Incluye 4 salsas",
        cantidad:0,
        precio:700
    }];

    otrosSnacks:Store[]=[
      {
        id:9,
        img:"../assets/store/pancho.jpg",
        categoria:"snack",
        producto:"Pancho",
        descripcion:"Con/Sin aderezo",
        cantidad:0,
        precio:300
    },
    {
      id:11,
      img:"../assets/store/pan-de-queso.jpg",
      categoria:"snack",
      producto:"Pan de queso",
      descripcion:"Incluye 6 panes",
      cantidad:0,
      precio:500
  },
  {
    id:12,
    img:"../assets/store/cono-pizza.jpg",
    categoria:"snack",
    producto:"Cono de pizza",
    descripcion:"Panceta/Aceitunas/Caprese",
    cantidad:0,
    precio:700
    }
  ];

  
  bebidas:Store[]=[
    {
      id:13,
      img:"../assets/store/lata-chica.jpg",
      categoria:"bebida",
      producto:"Gaseosa",
      descripcion:"Lata chica",
      cantidad:0,
      precio:200
  },
  {
    id:14,
    img:"../assets/store/lata-grande.jpg",
    categoria:"bebida",
    producto:"Gasesosa",
    descripcion:"Lata grande",
    cantidad:0,
    precio:300
},
{
  id:15,
  img:"../assets/store/cafe-chico.jpg",
  categoria:"bebida",
  producto:"Café",
  descripcion:"Vaso chico",
  cantidad:0,
  precio:100
  },
  {
    id:16,
    img:"../assets/store/cafe-grande.jpg",
    categoria:"bebida",
    producto:"Café",
    descripcion:"Vaso grande",
    cantidad:0,
    precio:200
    }
];

candies:Store[]=[
  {
    id:17,
    img:"../assets/store/malvaviscos.jpg",
    categoria:"candy",
    producto:"Malvavisco",
    descripcion:"Paquete chico",
    cantidad:0,
    precio:200
},
{
  id:18,
  img:"../assets/store/rocklets.jpg",
  categoria:"candy",
  producto:"Rocklets",
  descripcion:"Paquete chico",
  cantidad:0,
  precio:110
},
{
id:19,
img:"../assets/store/sugus.jpg",
categoria:"candy",
producto:"Sugus",
descripcion:"Caramelos confitados",
cantidad:0,
precio:160
},
{
  id:20,
  img:"../assets/store/gomitas.jpg",
  categoria:"candy",
  producto:"Gomitas",
  descripcion:"Paquete chico",
  cantidad:0,
  precio:110
  }
];

combos:Store[]=[
  {id:21,
    img:"../assets/store/combo1.jpg",
    categoria:"combo",
    producto:"Combo 1 ",
    descripcion:"1 bebida grande + snack a eleccion + sugus",
    cantidad:0,
    precio:990},
  {id:22,
    img:"../assets/store/combo2.jpg",
    categoria:"combo",
    producto:"Combo 2",
    descripcion:"1 Balde recargable + bebida + candy sin eleccion",
    cantidad:0,
    precio:500},
  {id:23,
    img:"../assets/store/combo3.jpg",
    categoria:"combo",
    producto:"Combo 3",
    descripcion:"1 Balde recargable + 1 bebida + candy a eleccion",
    cantidad:0,
    precio:900},
  {id:24,
    img:"../assets/store/combo4.jpg",
    categoria:"combo",
    producto:"Combo 4",
    descripcion:"2 Balde recargable + 2 bebida",
    cantidad:0,
    precio:1100},
];

  constructor() { }

  agregarProductos(){
    
  }
  modificarProductos(){
    
  }

  eliminarProductos(){
    
  }
}
