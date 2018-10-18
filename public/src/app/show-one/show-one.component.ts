import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show-one',
  templateUrl: './show-one.component.html',
  styleUrls: ['./show-one.component.css']
})
export class ShowOneComponent implements OnInit {
  transaction:any
  constructor( private _route: ActivatedRoute, private _http:HttpService ) {  }

  ngOnInit() {
    this.whereami();
  }
  whereami=()=>this._route.params.subscribe( 
    (params: Params) => this.transaction = this._http.findTransactionById(params['entryid'])
    // console.log('at route for', params['entryid'])     
    );    
  // findTransactionById=()=>;

}
