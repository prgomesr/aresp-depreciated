import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-dynamic',
  templateUrl: './table-dynamic.component.html',
  styleUrls: ['./table-dynamic.component.css']
})
export class TableDynamicComponent {

  @Input() dados = [];
  @Input() cols = [];

}
