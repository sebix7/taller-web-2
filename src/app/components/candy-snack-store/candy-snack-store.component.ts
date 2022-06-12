import { Component, OnInit } from '@angular/core';
import { CandySnackStoreService } from './services/candy-snack-store.service';
import { Store } from './store';

@Component({
  selector: 'app-candy-snack-store',
  templateUrl: './candy-snack-store.component.html',
  styleUrls: ['./candy-snack-store.component.css']
})
export class CandySnackStoreComponent implements OnInit {

  pochoclos:Store[]=[];
  nachos:Store[]=[];
  otrosSnacks:Store[]=[];
  bebidas:Store[]=[];
  candies:Store[]=[];
  combos:Store[]=[];
  
  constructor(private store:CandySnackStoreService) { 
    this.pochoclos=this.store.pochoclos;
    this.nachos=this.store.nachos;
    this.otrosSnacks=this.store.otrosSnacks;
    this.bebidas=this.store.bebidas;
    this.candies=this.store.candies;
    this.combos=this.store.combos;
  }

  ngOnInit(): void {
  }

}
