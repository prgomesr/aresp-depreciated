import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-parcela',
  templateUrl: './status-parcela.component.html',
  styleUrls: ['./status-parcela.component.css']
})
export class StatusParcelaComponent implements OnInit {

  dados = [
    {id: '1', situacao: 'Em dia', descricao: ''}
  ];
  cols = [
    {field: 'id', header: 'Id'},
    {field: 'situacao', header: 'Situaçao'},
    {field: 'descricao', header: 'Descrição'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
