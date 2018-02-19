import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TooltipModule } from 'primeng/tooltip';
import { DataTableModule } from 'primeng/datatable';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    TooltipModule,
    DataTableModule,
    TabViewModule,
    CalendarModule,
    FileUploadModule
  ]
})
export class SharedModule { }
