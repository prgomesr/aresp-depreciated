import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-parcela',
  templateUrl: './status-parcela.component.html',
  styleUrls: ['./status-parcela.component.css']
})
export class StatusParcelaComponent implements OnInit {

  parcelas = [
    {id: '1', situacao: 'Em dia', descricao: ''}
  ];
  constructor() { }

  ngOnInit() {
  }

}
