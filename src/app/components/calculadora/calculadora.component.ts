import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  n1:string;
  n2:string;
  result:string;

  constructor() { }

  ngOnInit(): void {
  }

  mul():void {
    this.result=(Number.parseInt(this.n1)*Number.parseInt(this.n2)).toString();
  }
  sum():void {
    this.result=(Number.parseInt(this.n1)+Number.parseInt(this.n2)).toString();
  }
  res():void {
    this.result=(Number.parseInt(this.n1)-Number.parseInt(this.n2)).toString();
  }
  div():void {
    this.result=(Number.parseInt(this.n1)/Number.parseInt(this.n2)).toString();
  }


}
