import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  balance: number
  ledger: any
  constructor( private _http:HttpService){  
    this.updateAll();
  }
  updateBal=()=> this.balance = this._http.getBal();
  updateLedger=()=>this.ledger = this._http.getLedger();
  updateAll=()=>{
    this.updateBal();
    this.updateLedger();
  }

}
