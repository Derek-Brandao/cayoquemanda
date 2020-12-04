import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Anamnese } from '../interfaces/anamnese';
import { AlertService } from '../services/alerts/alert.service';
import { AnamneseService } from '../services/anamnese/anamnese.service';

@Component({
  selector: 'app-avalia-anamnese',
  templateUrl: './avalia-anamnese.component.html',
  styleUrls: ['./avalia-anamnese.component.css']
})
export class AvaliaAnamneseComponent implements OnInit {

  public fGroup: FormGroup;
  anamnese: Anamnese;

  constructor(
    private routes: Router,
    private fBuilder: FormBuilder,
    private Aservices: AnamneseService,
    private Alert: AlertService,
  ) {
    const nav = this.routes.getCurrentNavigation();
    this.anamnese = nav.extras.state.anamnese;
  }

  ngOnInit() {

    console.log(this.anamnese);

    this.fGroup = this.fBuilder.group({
      comentario: [null, Validators.compose([Validators.required, Validators.max(500)])],
      nota: [null, Validators.compose([Validators.required, Validators.min(0), Validators.max(10)])]
    });
  }

  enviarFeedback(dados: NgForm) {
    console.log(dados);
    const anamneseId = this.anamnese.id;
    this.Aservices.addFeedback(anamneseId, dados).subscribe(
      res => {
        this.routes.navigate(['/home']);
        this.Alert.openSnackBar('Cadastrado com sucesso!',  'Ok');
      }
    );
  }

}
