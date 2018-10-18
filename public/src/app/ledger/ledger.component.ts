import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css','../app.component.css']
})
export class LedgerComponent implements OnInit {
  ledger:any
  constructor(private _http:HttpService,  private _main:AppComponent) { 
    this.updateLedger();
  }
  ngOnInit() {  }
  updateLedger=()=> this.ledger = this._main.updateLedger()

  
}
