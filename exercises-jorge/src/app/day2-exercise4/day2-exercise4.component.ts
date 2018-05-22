import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day2-exercise4',
  templateUrl: './day2-exercise4.component.html',
  styleUrls: ['./day2-exercise4.component.css']
})
export class Day2Exercise4Component implements OnInit {
  expression:string;
  result:number;

  constructor() { }

  public calculator(){
    this.result = null;
    this.result = eval(this.expression);
    this.expression="";
  }
  ngOnInit() {
  }

}
