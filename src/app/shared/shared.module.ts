import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'primeng/tooltip';
import { DataTableModule } from 'primeng/datatable';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  exports: [
    TooltipModule,
    DataTableModule,
    TabViewModule,
    CalendarModule,
    FormsModule
  ]
})
export class SharedModule { }
