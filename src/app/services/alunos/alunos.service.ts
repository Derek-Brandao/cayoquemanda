import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../../interfaces/aluno';
import { Router } from '@angular/router';
import { ApiService } from '../url/api.service';
import { AlertService } from '../alerts/alert.service';

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
      return this.http.get<Aluno[]>(`${this.api.url+this.api.listarAlunos}`);
    }
}
