import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../interfaces/aluno';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';;
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlunosService } from '../services/alunos/alunos.service';
import { AlertService } from '../services/alerts/alert.service';




@Component({
  selector: 'app-alunos-listagem',
  templateUrl: './alunos-listagem.component.html',
  styleUrls: ['./alunos-listagem.component.css']
})
export class AlunosListagemComponent implements OnInit {

  alunosReqObs$: Observable<Aluno[]>;
  anamneseDelete: Aluno[];


  constructor(
    private aluno: AlunosService,
    public router: Router,
    private location: Location,
    public alert: AlertService
  ) {
  }
  

  ngOnInit() {
    this.getAlunosHttpRequest();
    this.getAlunosHttpRequestErros();
  }

  /*
  goToDetalhesByState(aluno: Aluno) {

    this.router.navigateByUrl('/detalhes', {
      state: aluno
    });

  }
*/


  getAlunosHttpRequest() {
    this.alunosReqObs$ = this.aluno.getAlunos();
  }

  getAlunosHttpRequestErros() {
    this.aluno.getAlunos()
      .subscribe((alunos) => {
        console.log(alunos);
      },
        (err) => {
          if (err.status === 0) {
            this.alert.openSnackBar('Sem resposta da API, verifique sua conexão ou tente nomanete', 'Ok');
          }
        }

      );
  }



/*
  loadAnamnese() {
    this.anamneseService.getAnameses().subscribe((anam) => this.anamneseDelete = anam);
  }

  delete(anamnese: Anamnese) {
    this.anamneseService.deleteAnamnese(anamnese).subscribe(
      (res) => {
        let i = this.anamneseDelete.findIndex(aname => anamnese.id == aname.id);
        if (i >= 0) {
          this.anamneseDelete.slice(i, 1);
          location.reload();
        }
      },
      (err) => {
        {
          console.log(err);
          location.reload();
        }
      }
    );
  }*/
}
