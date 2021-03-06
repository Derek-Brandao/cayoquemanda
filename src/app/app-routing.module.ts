import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosListagemComponent } from './alunos-listagem/alunos-listagem.component';
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './helpers/auth.guard';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AnamneseComponent } from './anamnese/anamnese.component';
import { AvaliaAnamneseComponent } from './avalia-anamnese/avalia-anamnese.component';
import { AnamneseDetalhadaComponent } from './anamnese-detalhada/anamnese-detalhada.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadProfMed',
    component: CadastroComponent
  },
  {
    path: 'home',
    component: AlunosListagemComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'anamese',
    component: AnamneseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'avaliarAnamnese',
    component: AvaliaAnamneseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'anamneseDetalhada',
    component: AnamneseDetalhadaComponent,
    canActivate: [AuthGuard],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
