import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-recebimento',
  templateUrl: './tipo-recebimento.component.html',
  styleUrls: ['./tipo-recebimento.component.css']
})
export class TipoRecebimentoComponent implements OnInit {

  dados = [
    {id: '1', nome: 'Aluguel de Quadra'}]
  ;
  cols = [
    {field: 'nome', header: 'Nome'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
