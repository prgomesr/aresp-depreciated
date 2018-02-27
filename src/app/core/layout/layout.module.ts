import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDynamicComponent } from './table-dynamic/table-dynamic.component';

import {TableModule} from 'primeng/table';


@NgModule({
  imports: [
    CommonModule,
    TableModule
  ],
  declarations: [TableDynamicComponent],
  exports: [TableDynamicComponent]
})
export class LayoutModule { }
