import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

    clientes = [
    {id: '1', nome: 'João das Neves', cpf: '458.708.855-23', telefone: '17 3232-3232', email: 'joao@gmail.com', status: 'Em dia'},
    {id: '2', nome: 'Daniela Dragão', cpf: '868.625.656-21', telefone: '17 3232-3232', email: 'daniela@gmail.com', status: 'Cancelado'},
    {id: '3', nome: 'Tyrion Lannister', cpf: '160.513.102-40', telefone: '17 3232-3232', email: 'tyrion@gmail.com', status: 'Inadimplente'}
  ];
    /*getClass() {
      return ['badge', 'badge-success'];
    }*/
    constructor() { }

  ngOnInit() {
  }

}
