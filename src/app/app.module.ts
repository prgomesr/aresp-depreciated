import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ToastyModule } from 'ng2-toasty';
import { ContasPagarComponent } from './financeiro/contas-pagar/contas-pagar.component';
import { ContasPagarDataComponent } from './financeiro/contas-pagar/contas-pagar-data/contas-pagar-data.component';
import { ContasReceberComponent } from './financeiro/contas-receber/contas-receber.component';
import { ContasReceberDataComponent } from './financeiro/contas-receber/contas-receber-data/contas-receber-data.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    ToastyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
