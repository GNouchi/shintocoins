import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css','../app.component.css']
})
export class BuyComponent implements OnInit {
  order:number
  constructor(private _http:HttpService, private _main:AppComponent) { 
    this.resetOrder();
  }
  ngOnInit() {  }
  resetOrder=()=>this.order=0;

  buyCoins=()=>{
    if( this.order > 0 ) {
      this._http.addBal(this.order,'buy');
      this._main.updateAll();
    }
      this.resetOrder();
    console.log('done');    
  }




}
