import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {

  secretarias = [
    {id: '1', nome: 'Segurança Pública'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
