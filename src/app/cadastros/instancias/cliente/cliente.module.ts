import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {ClienteRoutingModule} from './cliente-routing.module';
import {ClienteComponent} from './cliente.component';
import {ClienteDataComponent} from './cliente-data/cliente-data.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ClienteRoutingModule
  ],
  declarations: [ClienteComponent, ClienteDataComponent]
})
export class ClienteModule { }
