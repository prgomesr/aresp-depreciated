import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {LayoutComponent} from './core/layout/layout.component';
import {Pagina404Component} from './core/pagina-404/pagina-404.component';
import {AcessoNegadoComponent} from './core/acesso-negado/acesso-negado.component';
import {Pagina500Component} from './core/pagina-500/pagina-500.component';
import {LoginComponent} from './core/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: LayoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'acesso-negado', component: AcessoNegadoComponent },
  { path: 'erro-servidor', component: Pagina500Component },
  { path: '**', pathMatch: 'full', component: Pagina404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

export const routedComponents = [AppComponent];
