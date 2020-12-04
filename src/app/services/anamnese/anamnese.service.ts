import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Anamnese } from 'src/app/interfaces/anamnese';
import { AlertService } from '../alerts/alert.service';
import { ApiService } from '../url/api.service';

@Injectable({
  providedIn: 'root'
})
export class AnamneseService {

  constructor(
    private http: HttpClient,
    public router: Router,
    private api: ApiService,
    public alert: AlertService,
  ) { }

  getAnamnese(): Observable<Anamnese[]> {
    return this.http.get<Anamnese[]>(`${this.api.url + this.api.anamnese}`).pipe(map(result => {
      const profMatricula = Number(window.localStorage.getItem('matricula'));

      const listaAnamneses: Anamnese[] = result['data'];

      // Filtra anamneses feitas para o professor que está logado
      const listaAnamnesesProfessor = listaAnamneses.filter((anamnese) => {
        return anamnese.professor_id === profMatricula ? anamnese : null;
      });

      return listaAnamnesesProfessor;
    }));
  }

  addFeedback(id: string, feedback: any): Observable<any> {
    console.log(typeof id);
    console.log(id);
    return this.http.put(`${this.api.url + this.api.AtualizaAnamnese + id}`, feedback);
  }
}
