import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day2-exercise2',
  templateUrl: './day2-exercise2.component.html',
  styleUrls: ['./day2-exercise2.component.css']
})
export class Day2Exercise2Component implements OnInit {
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
    }
    console.log(this.fibonacci);
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
