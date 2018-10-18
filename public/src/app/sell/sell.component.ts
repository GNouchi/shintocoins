import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css','../app.component.css']
})
export class SellComponent implements OnInit {
  order:number
  balance:number
  constructor(private _http:HttpService, private _main:AppComponent) {
    this.resetOrder();
    this.updateBal();
  }
  ngOnInit() {  }
  resetOrder=()=>this.order=0;
  updateBal=()=> this.balance = this._http.getBal();

  sellCoins=()=>{
      let fakeobservable = this._http.decreaseBal(this.order);
      // console.log(fakeobservable['message']);
      this.resetOrder();
      this.updateBal();
      this._main.updateAll();
    }

}
