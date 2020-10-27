import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/authentication/auth.service';
import { AlertService} from '../services/alerts/alert.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public fGroup: FormGroup;
  isLoadingResults = false;
  submitted = false;
  error: string;
  returnUrl: string;

  constructor(
    private authLogin: AuthService,
    private fBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public alert: AlertService,
  

  ) {
    // redireciona para home se já estiver logado
    if (this.authLogin.currentUserValue) {
      this.router.navigate(['/home']);
    }


  }

  ngOnInit() {
    this.fGroup = this.fBuilder.group({

      matricula: [null, Validators.compose([Validators.required, Validators.min(9999), Validators.max(999999)])],
      senha: [null, Validators.compose([Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,8}$/i)])],

    });
    // obtém o URL de retorno dos parâmetros da rota ou o padrão é '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  get f() { return this.fGroup.controls; }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.fGroup.invalid) {
      this.alert.openSnackBar("Por favor, informe uma matrícula ou senha valida", "Ok");
      return;
    }

    this.isLoadingResults = true;
    this.authLogin.login(this.f.matricula.value, this.f.senha.value).pipe(first()).subscribe(
      data => {

        let name = JSON.stringify(data.data.nome).replace(/["]/g, '').split(' ');
        this.alert.openSnackBar( "Bem-vindo(a), " + name[0], "Ok");
        this.router.navigate([this.returnUrl]);

      },
      error => {
        this.alert.openSnackBar(error = "Ops, algo deu errado, verifique seus dados e tente novamente", "Ok")
        this.isLoadingResults = false;
      }
    );
  }

}
