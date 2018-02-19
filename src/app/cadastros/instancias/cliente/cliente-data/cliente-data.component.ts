import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-data',
  templateUrl: './cliente-data.component.html',
  styleUrls: ['./cliente-data.component.css']
})
export class ClienteDataComponent implements OnInit {

  constructor() { }

  pt: any;
  uploadedFiles: any[] = [];
  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    /*this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});*/
  }
  ngOnInit() {
    this.pt = {
      firstDayOfWeek: 1,
      dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      dayNamesMin: ["D","S","T","Q","Q","S","S"],
      monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
      monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
      today: 'Hoje',
      clear: 'Limpar'
    };
  }

}
