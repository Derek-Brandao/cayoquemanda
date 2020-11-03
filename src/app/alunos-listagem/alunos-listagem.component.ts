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

  verAnamnese(aluno: Aluno){
    this.router.navigateByUrl('/anamese', { state: { aluno: aluno } });
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  load() {
    location.reload()
  }


}
