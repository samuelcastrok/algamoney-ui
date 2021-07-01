import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';

const routes: Routes = [
  {path:'lancamento-cadastro', component:LancamentoCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
