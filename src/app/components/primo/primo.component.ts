import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.scss']
})

export class PrimoComponent implements OnInit {
  result:string;
  prime:string;

  constructor() { }

  ngOnInit(): void {
  }

  isPrime(): void {
    let r:number = Number.parseInt(this.prime);
    let re:boolean = false;
    for (let i = 2; i < r-1; i++) {
      re = re || r%i==0; 
    }
    if(!re && r > 1) this.result = "Es primo";
    else this.result = "No es primo";
  }

}
