import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {
  materia:string;
  nota:string;

  constructor() { }

  ngOnInit(): void {
  }

  add():void{
    if(this.materia.trim() == "" || this.nota.trim() == "" ){
      alert("Rellene ambos campos");
      return;
    }
    let book = document.getElementById("book");
    let tr = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    th1.textContent = this.materia;
    th2.textContent = this.nota;
    tr.appendChild(th1);
    tr.appendChild(th2);
    book.appendChild(tr);
  }

}
