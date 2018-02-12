import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'diversos/banco', loadChildren: '../cadastros/diversos/banco/banco.module#BancoModule' },
      { path: 'diversos/convenio', loadChildren: '../cadastros/diversos/convenio/convenio.module#ConvenioModule' },
      { path: 'diversos/grupo', loadChildren: '../cadastros/diversos/grupo/grupo.module#GrupoModule' },
      { path: 'diversos/operadora', loadChildren: '../cadastros/diversos/operadora/operadora.module#OperadoraModule' },
      { path: 'diversos/secretaria', loadChildren: '../cadastros/diversos/secretaria/secretaria.module#SecretariaModule' },
      { path: 'diversos/status-parcela', loadChildren: '../cadastros/diversos/status-parcela/status-parcela.module#StatusParcelaModule' },
      { path: 'diversos/tipo-pagamento', loadChildren: '../cadastros/diversos/tipo-pagamento/tipo-pagamento.module#TipoPagamentoModule' },
      { path: 'diversos/tipo-recebimento', loadChildren: '../cadastros/diversos/tipo-recebimento/tipo-recebimento.module#TipoRecebimentoModule' },
      { path: 'diversos/tipo-socio', loadChildren: '../cadastros/diversos/tipo-socio/tipo-socio.module#TipoSocioModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CoreRoutingModule { }
