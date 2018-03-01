import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDynamicComponent } from './table-dynamic/table-dynamic.component';

import { DataTableModule } from 'primeng/datatable';
import { TooltipModule } from 'primeng/tooltip';

import { MessageComponent } from './message/message.component';


@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    TooltipModule
  ],
  declarations: [TableDynamicComponent, MessageComponent],
  exports: [TableDynamicComponent, MessageComponent]
})
export class LayoutModule { }
