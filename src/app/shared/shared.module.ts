import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from '../core/layout/layout.module';

import { TooltipModule } from 'primeng/tooltip';
import { DataTableModule } from 'primeng/datatable';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    LayoutModule,
    TooltipModule,
    DataTableModule,
    TabViewModule,
    CalendarModule,
    FileUploadModule,
    InputTextModule,
    SelectButtonModule,
    DropdownModule,
    InputTextareaModule,
    InputMaskModule,
    TableModule
  ]
})
export class SharedModule { }
