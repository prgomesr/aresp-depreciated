import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {

  dados = [
    {id: '1', nome: 'Banco do Brasil', numero: '001', telefone: '11 4444-4444'},
    {id: '2500', nome: 'Banco do Brasil', numero: '001', telefone: '11 4444-4444'}
  ];
  cols = [
    {field: 'nome', header: 'Nome'},
    {field: 'numero', header: 'Número'},
    {field: 'telefone', header: 'Telefone'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
