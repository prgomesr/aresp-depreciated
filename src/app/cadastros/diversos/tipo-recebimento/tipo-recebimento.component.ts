import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-recebimento',
  templateUrl: './tipo-recebimento.component.html',
  styleUrls: ['./tipo-recebimento.component.css']
})
export class TipoRecebimentoComponent implements OnInit {

  tipos = [
    {id: '1', nome: 'Aluguel de Quadra'}]
  ;
  constructor() { }

  ngOnInit() {
  }

}
