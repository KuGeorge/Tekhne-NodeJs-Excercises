import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day2-exercise1',
  templateUrl: './day2-exercise1.component.html',
  styleUrls: ['./day2-exercise1.component.css']
})
export class Day2Exercise1Component implements OnInit {
  expression:number;
  fibonacci:Array<number>;
  result:boolean;

  constructor() { 
    //this.expression = 5;
    this.result = false;
    this.fibonacci=[];
  }
  public fibonacciConsole(){
    this.fibonacci=[];
    for(var i=0;i<this.expression; i++){
      this.fibonacci.push(this.fibonacciSeries(i+1));
      console.log(this.fibonacci[i]);
    }
    this.result = true;
    this.expression = null;
  }
  private fibonacciSeries(n:number):number{
    let fibonacci:number;
    if(n===0){
      fibonacci = 0;
    }
    else{
      if(n===1){
        fibonacci = 1;
      }
      else{
        fibonacci = this.fibonacciSeries(n-1)+this.fibonacciSeries(n-2);      
      }
    }
    return fibonacci;
  }
    
  ngOnInit() {
  }

}
