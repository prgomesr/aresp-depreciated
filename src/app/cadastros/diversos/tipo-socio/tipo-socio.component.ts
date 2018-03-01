import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-socio',
  templateUrl: './tipo-socio.component.html',
  styleUrls: ['./tipo-socio.component.css']
})
export class TipoSocioComponent implements OnInit {

  dados = [
    {id: '1', nome: 'Sócio Contribuinte'}]
  ;
  cols = [
    {field: 'nome', header: 'Nome'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
