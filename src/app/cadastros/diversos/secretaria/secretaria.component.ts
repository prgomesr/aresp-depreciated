import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {

  dados = [
    {id: '1', nome: 'Segurança Pública'}
  ];
  cols = [
    {field: 'nome', header: 'Nome'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
