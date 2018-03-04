import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DataTableModule } from 'primeng/datatable';
import { TooltipModule } from 'primeng/tooltip';

import { TableDynamicComponent } from './table-dynamic/table-dynamic.component';
import { MessageComponent } from './message/message.component';
import { ButtonComponent } from './button/button.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DataTableModule,
    TableModule,
    TooltipModule,
    ButtonModule
  ],
  declarations: [TableDynamicComponent, MessageComponent, ButtonComponent],
  exports: [TableDynamicComponent, MessageComponent, ButtonComponent]
})
export class LayoutModule { }
