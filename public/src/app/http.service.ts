import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  coinbal:number
  ledger:any
  constructor(private _http:HttpClient) { 
      if(this.coinbal==undefined){this.coinbal =0 };  
      if(this.ledger==undefined){this.ledger = new Array };  
  }
  getBal=()=> this.coinbal;
  getLedger=()=> this.ledger;
  genrand=()=> Math.floor(Math.random() * Math.floor(10001));
  
  addBal=(amt,category)=>{
    console.log('received:' ,amt, 'balance is currently:', this.coinbal);    
    this.coinbal=(amt>0)?this.coinbal+amt:this.coinbal;
    this.addTrans(amt, category);
  }

  decreaseBal=(amt)=>{
    let retobj= {message:''}
        retobj.message =`error - insufficient balance to withdraw ${amt}`;
        if(this.coinbal-amt>=0 && amt>0){
          this.coinbal = this.coinbal-amt;
          this.getBal();
          this.addTrans(amt, 'sell');
          retobj.message ='success';
        }
        return retobj;
  }

  addTrans=(amt:number, category:string)=>{
    let newTrans = { 'amount' : amt, 'category' : category, 'balance' : this.coinbal, 'id': this.genrand()}
    this.ledger.push(newTrans)
  }

  findTransactionById=(transid:string)=>{
    for(let i=0; i< this.ledger.length; i++){
      if(this.ledger[i].id == transid){
        return this.ledger[i]
      }
    }
  }




}
