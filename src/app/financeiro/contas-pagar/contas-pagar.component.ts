import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contas-pagar',
  templateUrl: './contas-pagar.component.html',
  styleUrls: ['./contas-pagar.component.css']
})
export class ContasPagarComponent implements OnInit {

  contas = [];
  periodos = [
    {name: 'Mês atual', value: 1},
    {name: 'Últimos 7 dias', value: 2},
    {name: 'Todos', value: 3},
  ];
  cols = [{}];

  constructor() { }

  ngOnInit() {
  }

}
