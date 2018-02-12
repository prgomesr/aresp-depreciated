import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Pagina404Component } from './pagina-404/pagina-404.component';
import {CoreRoutingModule} from './core-routing.module';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { Pagina500Component } from './pagina-500/pagina-500.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [LayoutComponent, DashboardComponent, Pagina404Component, AcessoNegadoComponent, Pagina500Component, LoginComponent],
  exports: [LayoutComponent, Pagina404Component, AcessoNegadoComponent, Pagina500Component, LoginComponent]
})
export class CoreModule { }
