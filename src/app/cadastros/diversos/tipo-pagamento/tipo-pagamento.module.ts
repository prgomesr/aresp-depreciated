import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {TipoPagamentoRoutingModule} from './tipo-pagamento-routing.module';
import {TipoPagamentoComponent} from './tipo-pagamento.component';
import {TipoPagamentoDataComponent} from './tipo-pagamento-data/tipo-pagamento-data.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TipoPagamentoRoutingModule
  ],
  declarations: [TipoPagamentoComponent, TipoPagamentoDataComponent]
})
export class TipoPagamentoModule { }
