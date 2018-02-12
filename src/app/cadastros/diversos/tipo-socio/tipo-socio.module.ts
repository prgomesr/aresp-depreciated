import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {TipoSocioRoutingModule} from './tipo-socio-routing.module';
import {TipoSocioComponent} from './tipo-socio.component';
import {TipoSocioDataComponent} from './tipo-socio-data/tipo-socio-data.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TipoSocioRoutingModule
  ],
  declarations: [TipoSocioComponent, TipoSocioDataComponent]
})
export class TipoSocioModule { }
