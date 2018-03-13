import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contas-receber',
  templateUrl: './contas-receber.component.html',
  styleUrls: ['./contas-receber.component.css']
})
export class ContasReceberComponent implements OnInit {

  contas = [];
  periodos = [
    {label: 'Mês atual', value: 1},
    {label: 'Últimos 7 dias', value: 2},
    {label: 'Todos', value: 3},
  ];
  cols = [{}];
  constructor() { }

  ngOnInit() {
  }

}
