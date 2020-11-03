import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../interfaces/aluno';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlunosService } from '../services/alunos/alunos.service';
import { AlertService } from '../services/alerts/alert.service';
import { AuthService } from '../services/authentication/auth.service';




@Component({
  selector: 'app-alunos-listagem',
  templateUrl: './alunos-listagem.component.html',
  styleUrls: ['./alunos-listagem.component.css']
})
export class AlunosListagemComponent implements OnInit {
  isLoadingResults = false;
  items = [];
  pageOfItems: Array<any>;
  alunosReqObs$: Observable<Aluno[]>;
  anamneseDelete: Aluno[];
  returnUrl: string;

  constructor(
    private aluno: AlunosService,
    public router: Router,
    private route: ActivatedRoute,
    public alert: AlertService,
    private authService: AuthService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getAlunosHttpRequest();
  }

  /*
  goToDetalhesByState(aluno: Aluno) {

    this.router.navigateByUrl('/detalhes', {
      state: aluno
    });

  }
*/
  getAlunosHttpRequest() {
    this.aluno.getAlunos().subscribe(
      (result) => {
        this.items = result;
      },
      (erro) => {
        this.alert.openSnackBar(erro, "Ok");
        this.authService.logout();
        this.router.navigate([this.returnUrl]);
      }
    );

  }

  deleteAlunosHttpRequest(aluno: Aluno) {
    this.aluno.deleteAluno(aluno).subscribe((res) => {
      this.alert.openSnackBar(res, "Ok");
      this.load();
    },
      (erro) => {
        this.alert.openSnackBar(erro, "Ok")
        this.load();
      }
    );

    this.aluno.deleteAllAnamneseAluno(aluno).subscribe((res) => {
      
      this.load();
    },
      (erro) => {
        this.alert.openSnackBar(erro, "Ok")
        this.load();
      }
    );
    
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  load() {
    location.reload()
  }

  /*
  getAlunosHttpRequestErros() {
    this.aluno.getAlunos()
      .subscribe((pages) => {


      },
        (err) => {
          if (err.status === 0) {
            this.alert.openSnackBar('Sem resposta da API, verifique sua conexão ou tente nomanete', 'Ok');
          }
        }

      );
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
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
