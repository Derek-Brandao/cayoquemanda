import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from '../interfaces/aluno';
import { Anamnese } from '../interfaces/anamnese';
import { AnamneseService } from '../services/anamnese/anamnese.service';


@Component({
  selector: 'app-anamnese',
  templateUrl: './anamnese.component.html',
  styleUrls: ['./anamnese.component.css']
})
export class AnamneseComponent implements OnInit {
  items: Anamnese[];
  pageOfItems: Array<any>;
  aluno: Aluno;
  returnUrl: string;
  professor: number;

  constructor(
    private router: Router,
    private anamneseService: AnamneseService
  ) {

    this.professor = JSON.parse(localStorage.getItem('matricula'));
    // const nav = this.router.getCurrentNavigation();
    this.aluno = JSON.parse(window.localStorage.getItem('current_aluno'));
    this.getAnamneseHttpRequest();
  }

  ngOnInit() {
    console.log(this.professor);
  }

  getAnamneseHttpRequest() {
    this.anamneseService.getAnamnese().subscribe((result) => {
      this.items = result.filter((res) => {
        return res.aluno_id === this.aluno.matricula;
      });
      console.log(this.items);
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  avaliarAnamnese(item: Anamnese) {
    window.localStorage.setItem('current_anamnese', JSON.stringify(item));
    // console.log(item);
    this.router.navigateByUrl('/avaliarAnamnese', {state: {
      anamnese: item,
    }});
  }

  anamneseDetalhada(item: Anamnese) {
    window.localStorage.setItem('current_anamnese', JSON.stringify(item));
    this.router.navigateByUrl('/anamneseDetalhada');
  }
}
