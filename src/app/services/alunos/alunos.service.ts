import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Aluno } from '../../interfaces/aluno';
import { Router } from '@angular/router';
import { ApiService } from '../url/api.service';
import { AlertService } from '../alerts/alert.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(
    private http: HttpClient,
    public router: Router,
    private api: ApiService,
    public alert: AlertService,
  ) { }

  getAlunos(): Observable<Aluno[]> {
    return forkJoin([
      this.http.get(`${ this.api.url + this.api.anamnese}`),
      this.http.get<Aluno[]>(`${this.api.url + this.api.listarAlunos}`),
    ]).pipe(map((dados: any[]) => {

      const profMatricula = Number(window.localStorage.getItem('matricula'));

      const [anamneses, alunos] = dados;

      const { data: dataAnamnese } = anamneses;
      const { data: dataAlunos } = alunos;

      // Filtra as anamneses feitas para o professor que está logado
      const listaAnamnesesProfessor = dataAnamnese.filter((anamnese: any) => {
        return anamnese.professor_id === profMatricula ? anamnese : null;
      });


      // Filtra os alunos que enviaram anamneses para o professor
      const listaAlunos = dataAlunos.filter((aluno: any, index: number) => {
        const alunoAnamnses = !!listaAnamnesesProfessor
          .find((anamneseItem: any) =>
            anamneseItem.aluno_id === aluno.matricula
          );

        return alunoAnamnses ? aluno : null;
        });

      return listaAlunos;
    }));
  }

  deleteAluno(aluno: Aluno) {
    return this.http.delete(`${this.api.url + this.api.deleteAluno}${aluno.matricula}`).pipe(map(result =>{
      return result['message'];
    }));
  }

  deleteAllAnamneseAluno(aluno: Aluno) {
    return this.http.delete(`${this.api.url + this.api.deleteAllAnamneseAluno}${aluno.matricula}`).pipe(map(result =>{
      return result['message'];
    }));
  }

}
