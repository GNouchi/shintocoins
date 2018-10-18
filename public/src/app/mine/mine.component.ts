import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css','../app.component.css']
})
export class MineComponent implements OnInit {
  answer:number
  currentQ:number
  questions:any
  result:string

  constructor(private _http:HttpService, private _main:AppComponent) {
    this.clearAnswer();
    this.initAnswers();
    this.incrementCurrentQ();    
    this.result=null;
   }
  ngOnInit() { }
  clearAnswer=()=>this.answer=(this.answer)?null:this.answer;
  initAnswers=()=>this.questions=[1,2,3,4,5];
  incrementCurrentQ=()=> (this.currentQ<this.questions.length-1)?this.currentQ++:this.currentQ=0;

  checkAnswer=()=>{
    this.result='wrong';
    if(this.answer==this.questions[this.currentQ]){
      this._http.addBal(1, ,'mine');
      this._main.updateAll();
      this.incrementCurrentQ();
      this.clearAnswer();
      this.result='correct'
    }
  }

}
