import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operadora',
  templateUrl: './operadora.component.html',
  styleUrls: ['./operadora.component.css']
})
export class OperadoraComponent implements OnInit {

  operadoras = [
    {id: '1', nome: 'Visa', imagem: 'imagem.jpg' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
