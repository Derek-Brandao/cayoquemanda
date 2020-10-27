import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../services/alerts/alert.service';
import { RegiService } from '../services/register/regi.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{

  public fGroup: FormGroup;
  isLoadingResults = false;

  constructor(
    private fBuilder: FormBuilder,
    private regiService: RegiService,
    private router: Router,
    public alertas: AlertService
  ) { 

    // Faz a validação dos campos
    this.fGroup = this.fBuilder.group({

      'nome': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(250)])],
      // tslint:disable-next-line: max-line-length
      'matricula': [null, Validators.compose([Validators.required, Validators.min(9999), Validators.max(999999)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i)])],
      'senha': [null, Validators.compose([Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,8}$/i)])],
    });

  }

  ngOnInit() {

  }

  sendCadastro(from: NgForm) {
    this.isLoadingResults = true;

    if (this.fGroup.invalid) {
      this.alertas.openSnackBar("Você deixou campos vazios", "Ok")
    } else {

      this.regiService.postCadastrar(from).subscribe(
        res => {
          
          this.isLoadingResults = false;
          this.router.navigate(['/login']);
          this.alertas.openSnackBar("Cadastrado com sucesso!",  "Ok")
          console.log(res);

        },
        error => {
          if (error.email) {

            this.alertas.openSnackBar(error.email[0] = "Esse não é um e-mail valido.", "Ok");
          }

          this.alertas.openSnackBar(error, "Ok")
          console.log(error);
        }

      );
    }

  }

}
