import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Url do EndPoint
  readonly url: string = 'http://eregular.fabrica.unipe.br:8060/';
  // readonly url: string = 'http://localhost:5000/';

  // Nome dos EndPoints
  public anamnese = 'api/anamneses';
  public deleteAllAnamneseAluno = 'api/anamneses/';
  public AtualizaAnamnese = 'api/anamnese/';
  public deleteAluno = 'api/paluno/';
  public listarAlunos = 'api/alunos';
  public cadastrarProfessor = 'api/professor/cadastrar';
  public autenticarProfessor = 'api/professor/autenticar';


  constructor() { }


}
