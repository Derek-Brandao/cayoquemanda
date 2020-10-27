import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalhesComponent } from './alunos-listagem/detalhes/detalhes.component';
import { AlunosListagemComponent } from './alunos-listagem/alunos-listagem.component';
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './helpers/auth.guard';
import { CadastroComponent } from './cadastro/cadastro.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: AlunosListagemComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'detalhes',
    component: DetalhesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadProfMed',
    component: CadastroComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
