import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  grupos = [
    {id: '1', nome: 'BB1'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
