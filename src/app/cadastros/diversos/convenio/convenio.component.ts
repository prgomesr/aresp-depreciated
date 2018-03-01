import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.component.html',
  styleUrls: ['./convenio.component.css']
})
export class ConvenioComponent implements OnInit {
  dados = [
    {id: '1', nome: 'Cielo', numero: '55555', telefone: '11 4444-4444', observacao: 'Enviar remessa todo dia 15'},
    {id: '2', nome: 'Banco do Brasil', numero: '44444', telefone: '', observacao: ''},
    {id: '3', nome: 'Santander', numero: '333333', telefone: '', observacao: ''},
    {id: '4', nome: 'Bradesco', numero: '222222', telefone: '', observacao: ''},
    {id: '5', nome: 'Teste', numero: '111111', telefone: '', observacao: ''},
    {id: '6', nome: 'Teste', numero: '', telefone: '', observacao: ''},
    {id: '7', nome: 'Teste', numero: '', telefone: '', observacao: ''},
    {id: '8', nome: 'Teste', numero: '', telefone: '', observacao: ''},
    {id: '9', nome: 'Teste', numero: '', telefone: '', observacao: ''},
    {id: '10', nome: 'Teste', numero: '', telefone: '', observacao: ''},
    {id: '11', nome: 'Teste', numero: '', telefone: '', observacao: ''}
  ];
  cols = [
    {field: 'nome', header: 'Nome'},
    {field: 'numero', header: 'Número'},
    {field: 'telefone', header: 'Telefone'},
    {field: 'observacao', header: 'Observação'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
