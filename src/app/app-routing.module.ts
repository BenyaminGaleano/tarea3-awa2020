import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { NotasComponent } from './components/notas/notas.component';
import { PrimoComponent } from './components/primo/primo.component';


const routes: Routes = [
  {path:"calculadora", component:CalculadoraComponent},
  {path:"notas", component:NotasComponent},
  {path:"primo", component:PrimoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
