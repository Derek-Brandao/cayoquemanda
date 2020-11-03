import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../interfaces/aluno';
import { AnamneseService } from '../services/anamnese/anamnese.service';


@Component({
  selector: 'app-anamnese',
  templateUrl: './anamnese.component.html',
  styleUrls: ['./anamnese.component.css']
})
export class AnamneseComponent implements OnInit {

  aluno: Aluno;

  constructor(
    private router: Router,
    private anamneseService: AnamneseService
  ) {

    const nav = this.router.getCurrentNavigation();
    this.aluno = nav.extras.state.aluno;

  }

  ngOnInit() {
    console.log(this.aluno.matricula);
    this.getAnamneseHttpRequest();
  }

  getAnamneseHttpRequest() {
    this.anamneseService.getAnamnese().subscribe((result) => {
      result.find(res => {
        res.aluno_id == this.aluno.matricula;
      },

      );
    })

  }


}
