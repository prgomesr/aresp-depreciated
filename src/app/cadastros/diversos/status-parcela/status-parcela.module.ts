import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {StatusParcelaRoutingModule} from './status-parcela-routing.module';
import {StatusParcelaComponent} from './status-parcela.component';
import {StatusParcelaDataComponent} from './status-parcela-data/status-parcela-data.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StatusParcelaRoutingModule
  ],
  declarations: [StatusParcelaComponent, StatusParcelaDataComponent]
})
export class StatusParcelaModule { }
