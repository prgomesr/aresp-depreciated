import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-pagamento',
  templateUrl: './tipo-pagamento.component.html',
  styleUrls: ['./tipo-pagamento.component.css']
})
export class TipoPagamentoComponent implements OnInit {

  tipos = [
    {id: '1', nome: 'Cheque'}]
  ;
  constructor() { }

  ngOnInit() {
  }

}
