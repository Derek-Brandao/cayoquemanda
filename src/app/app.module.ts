import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from './api/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlunosListagemComponent } from './alunos-listagem/alunos-listagem.component';

import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { DetalhesComponent } from './alunos-listagem/detalhes/detalhes.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AuthGuard } from './helpers/auth.guard';
import { AuthService } from './services/authentication/auth.service';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertService } from './services/alerts/alert.service';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AlunosListagemComponent,
    DetalhesComponent,
    LoginComponent,
    CadastroComponent,
  ],
  imports: [
    FormsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AlertModule,
    
    ],
  providers: [ 
    AlertService,
    ApiService, 
    AuthGuard, 
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
