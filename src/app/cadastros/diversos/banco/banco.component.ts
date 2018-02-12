import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {

  bancos = [
    {id: '1', nome: 'Banco do Brasil', numero: '001', telefone: '11 4444-4444'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
