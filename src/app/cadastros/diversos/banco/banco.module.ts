import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BancoRoutingModule} from './banco-routing.module';
import {BancoComponent} from './banco.component';
import {BancoDataComponent} from './banco-data/banco-data.component';
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BancoRoutingModule
  ],
  declarations: [BancoComponent, BancoDataComponent]
})
export class BancoModule { }
