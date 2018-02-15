import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'primeng/tooltip';
import { DataTableModule } from 'primeng/datatable';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    TooltipModule,
    DataTableModule,
    TabViewModule
  ]
})
export class SharedModule { }
