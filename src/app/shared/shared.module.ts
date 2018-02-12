import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'primeng/tooltip';
import { DataTableModule } from 'primeng/datatable';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    TooltipModule,
    DataTableModule
  ]
})
export class SharedModule { }
