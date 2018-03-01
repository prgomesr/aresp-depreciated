import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  dados = [
    {id: '1', nome: 'BB1'}
  ];
  cols = [
    {field: 'nome', header: 'Nome'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
