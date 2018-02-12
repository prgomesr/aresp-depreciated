import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-socio',
  templateUrl: './tipo-socio.component.html',
  styleUrls: ['./tipo-socio.component.css']
})
export class TipoSocioComponent implements OnInit {

  tipos = [
    {id: '1', nome: 'Sócio Contribuinte'}]
  ;
  constructor() { }

  ngOnInit() {
  }

}
