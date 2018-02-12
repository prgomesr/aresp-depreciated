import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteDataComponent } from './cliente/cliente-data/cliente-data.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClienteComponent, ClienteDataComponent]
})
export class InstanciasModule { }
