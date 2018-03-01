import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operadora',
  templateUrl: './operadora.component.html',
  styleUrls: ['./operadora.component.css']
})
export class OperadoraComponent implements OnInit {

  dados = [
    {id: '1', nome: 'Visa', imagem: 'imagem.jpg' }
  ];
  cols = [
    {field: 'id', header: 'Id'},
    {field: 'nome', header: 'Nome'},
    {field: 'imagem', header: 'Imagem'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
